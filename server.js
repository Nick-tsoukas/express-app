var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var   PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var data = [
  {
    name: 'nick',
    money: 'none'
  }
];

app.get("/", function(req,res) {
  return res.json(data);
});

app.listen(PORT, function() {
  console.log('server is up and running')
});
