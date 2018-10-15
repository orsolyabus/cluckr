const express = require("express");
const router = express.Router();
const knex = require("../db/client");
const timeAgo = require('node-time-ago');

router.get("/clucks", (req, res)=>{
  knex("clucks")
    .orderBy('createdAt', "desc")
    .then((clucks) => {
      res.render("index", { clucks: clucks , timeAgo: timeAgo})
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
      res.redirect("/clucks");
    })
})

module.exports = router;