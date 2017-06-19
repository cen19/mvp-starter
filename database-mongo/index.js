var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipes');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var recipeSchema = mongoose.Schema({
  title: String,
  sourceUrl: String,
  imageUrl: String,
  rank: Number
});

var Recipe = mongoose.model('Recipe', recipeSchema);

var selectAll = function(callback) {
  Recipe.find({}, function(err, recipes) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, recipes);
    }
  });
};

module.exports.selectAll = selectAll;