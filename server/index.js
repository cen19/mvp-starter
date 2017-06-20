var express = require('express');
var bodyParser = require('body-parser');
var key = require('./key.js');
var request = require('request');
var Recipe = require('../database-mongo');
var recipes = require('../database-mongo');
// var Search = require('../react-client/src/components/search.jsx');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


// var query = 'ground%20beef';

app.get('/recipes', function (req, res) {
  Recipe.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      // res.json(data); // was given to me
      res.send(data);
      // res.send('hellllooooo');
    }
  });
});

app.post('/recipes/search', function (req, res) {
  if (req) {
    console.log('req received');

    // send the API call
    request.get(`http://food2fork.com/api/search?key=${key}&q=${query}`, function(err, response, body) {
      if (err) {
        console.log(err);
      }
      var parsedBody = JSON.parse(body);
      console.log(parsedBody);

      parsedBody.recipes.forEach(function (recipe) {
        recipe = new Recipe.Recipe({
          title: recipe.title,
          sourceUrl: recipe.source_url,
          imageUrl: recipe.image_url,
          rank: recipe.social_rank,
          searchTerm: query.split('%20').join(' ')
        });
        recipe.save(function(err, recipe) {
          if (err) {
            console.log(err);
          } else {
            console.log(`${recipe.title} was saved!`);
          }
        });
      });
    });
  }

  res.send('hello to you from the express server');
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

