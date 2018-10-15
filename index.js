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

app.get("/", (req, res) => {
  res.render("hello")
})

const signInRouts = require("./routes/sign_in_out");

app.use("/", signInRouts);

const clucksRoutes = require("./routes/clucks");

app.use("/clucks", clucksRoutes);

const PORT = 5100
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});