const express = require("express");
const router = express.Router();

router.get("/sign_in", (req, res) => {
  res.render("sign_in")
})

const COOKIE_MAX_AGE = 1000 * 60 * 2; //2 minutes
router.post("/sign_in", (req, res) => {
  // res.send(req.body);
  const username = req.body.username;
  res.cookie('username', username, { maxAge: COOKIE_MAX_AGE });
  res.redirect("/");
});

router.post("/sign_out", (req, res /*, next */) => {
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;