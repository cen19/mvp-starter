var express = require('express');
var bodyParser = require('body-parser');
var key = require('./key.js');
var request = require('request');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/recipes', function (req, res) {
  items.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      // res.json(data); // was given to me
      res.send('getting you some data');
    }
  });
});

app.post('/recipes/search', function (req, res) {
  if (req) {
    console.log('req received');

    // send the API call
  }
  res.send('hello to you from the express server');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

