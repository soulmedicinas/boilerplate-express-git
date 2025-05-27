let express = require("express");
require("dotenv").config();
let app = express();

console.log("HRBP  Hello World");

app.get("/json", (req, res) => {
  //res.json({ message: "Hello json" });

  console.log("log de .env", process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  }

  let absolutePath = __dirname + "/views/index.html";

  res.sendFile(absolutePath);
});

// app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
