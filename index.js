const path = require("path");
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan('dev'));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser())

app.use((req, res, next) => {
  console.log(req.cookies);
  const username = req.cookies.username;
  res.locals.username = ""
  if (username) {
    res.locals.username = username;
    console.log(`Signed in as ${username}`)
  }
  next();
});

app. get("/", (req, res) => {
  res.send("hello")
})

app.get("/sign_in", (req, res) => {
  res.render("sign_in")
})

const COOKIE_MAX_AGE = 1000 * 60 * 2; //2 minutes
app.post("/sign_in", (req, res) => {
  // res.send(req.body);
  const username = req.body.username;
  res.cookie('username', username, { maxAge: COOKIE_MAX_AGE });
  res.redirect("/");
});

app.post("/sign_out", (req, res /*, next */) => {
  res.clearCookie("username");
  res.redirect("/");
});

const PORT = 5100
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});