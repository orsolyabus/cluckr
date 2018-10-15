const express = require("express");
const router = express.Router();
const knex = require("../db/client");
const timeAgo = require('node-time-ago');

router.get("/clucks", (req, res) => {
  knex("clucks")
    .orderBy('createdAt', "desc")
    .then((clucks) => {
      knex("tags")
        .orderBy("count", "desc")
        .then((tags) => {
          res.render("index", { clucks: clucks, timeAgo: timeAgo, tags: tags })
        })
    })
})

router.get("/new", (req, res) => {
  res.render("new")
})

router.post("/new", (req, res) => {
  const username = req.cookies.username;
  knex('clucks')
    .insert({
      username: username,
      content: req.body.content,
      image_url: req.body.url
    })
    .returning("*")
    .then((data) => {
      // res.send(data[0].content)
      const tags = findTags(data[0].content);
      tags.forEach(element => {
        knex("tags")
          .where('tag', element)
          .then((row) => {
            if (row[0]) {
              knex("tags")
                .update({
                  tag: row[0].tag,
                  count: row[0].count + 1
                })
                .returning("*")
                .where("tag", element)
                .then((data) => {
                  console.log( "updated", data)
                })
            } else {
              knex("tags")
                .insert({
                  tag: element,
                  count: 1
                })
                .returning("*")
                .then((data) => {
                  console.log("inserted", data)
                })
            }
          })
      });
      res.redirect("/clucks");
    })
})

function findTags(text) {
  const words = text.split(" ")
  const tags = words.filter(word => word.startsWith(("#")));
  return tags
}



module.exports = router;