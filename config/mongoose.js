var path     = require('path'),
    fs       = require('fs'),
    mongoose = require('mongoose');

//change database name!
mongoose.connect('mongodb://localhost/surveys_db', {useNewUrlParser: true, useUnifiedTopology: true});
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});