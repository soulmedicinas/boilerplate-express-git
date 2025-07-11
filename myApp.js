let express = require('express');
let app = express();
require('dotenv').config();

app.use(function middleware(req, res, next) {
    let string = `${req.method} ${req.path} - ${req.ip}`;
    console.log(string);
    next();
});

console.log("Hello World");

//app.get('/', function(req, res) {
    //res.send('Hello Express');
//});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message" : "HELLO JSON"})}
  else {
    res.json({ "message": "Hello json"})
  };
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({"time": req.time});
});

app.get('/:word/echo', function(req, res) {
  const { word } = req.params;
  res.json({echo:word})
  next();
});

function nameHandler(req, res) {
  // For GET requests, use query parameters
  // For POST requests, use body parameters
  const firstname = req.query.first;
  const lastname = req.query.last;
  res.json({ name: "`${firstname} ${lastname}`"});

app.route('/name')
    .get(nameHandler)
    .post(nameHandler);
};

//app.route('/name', function(req, res).get(handler).post(handler) {
  //res.json({ name: '`${firstname} ${lastname}`'})
  
//});
































 module.exports = app;
