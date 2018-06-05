var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var friendsArray = [
  {
    name: 'nick',
    money: 'none'
  }
];

app.get("/", function(req,res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  friendsArray.push(newFriend);
  res.json(newFriend);
});

app.listen(PORT, function() {
  console.log('server is up and running')
});
