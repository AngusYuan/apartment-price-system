var express = require('express');
var path = require('path');

var index = require('./routes/index');
var heatmap = require('./routes/heatmap');
var mongoose = require("mongoose");
mongoose.connect("mongodb://angus:angus@ds127801.mlab.com:27801/capstone");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

app.use('/', index);
app.use('/heatmap', heatmap);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('404 Not Found');
});

module.exports = app;
