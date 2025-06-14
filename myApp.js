const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

console.log("Hello Express");

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Middleware to parse POST body
app.use(bodyParser.urlencoded({ extended: false }));

// Static assets
app.use("/public", express.static(path.join(__dirname, "public")));

// Time route
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

// Echo route
app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

// GET and POST for /name
app
  .route("/name")
  .get((req, res) => {
    const { first: firstName, last: lastName } = req.query;
    res.json({ name: `${firstName} ${lastName}` });
  })
  .post((req, res) => {
    const { first: firstName, last: lastName } = req.body;
    res.json({ name: `${firstName} ${lastName}` });
  });

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// JSON response route
app.get("/json", (req, res) => {
  const message =
    process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";

  res.json({ message });
});

module.exports = app;
