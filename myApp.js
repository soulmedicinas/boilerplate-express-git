let express = require("express");
let app = express();

// console.log("HRBP  Hello World");

app.get("/json", (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.send({ message: message });
});

// app.get("/json", (req, res) => {
//   //res.json({ message: "Hello json" });

//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ message: "HELLO JSON" });
//   } else {
//     res.json({ message: "Hello json" });
//   }
//   // let absolutePath = __dirname + "/views/index.html";
//   // res.sendFile(absolutePath);
// });

// app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
