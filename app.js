var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');
var app = express();
var mongoDB = mongoose.connect('mongodb://FreshTechPrepper:freshprep2018@ds247852.mlab.com:47852/freshpreppiesinfo',  function (err) {
  if(!err) console.log("mongo working");
  else console.log("Failed to Connected to DataBase");
});
var db = mongoose.connection;




//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
/*
mongoose.connect('mongodb://FreshTechPrepper:freshprep2018@ds247852.mlab.com:47852/freshpreppiesinfo', function(err,db)
{
  if(!err){
    console.log("we are connected to Mongo");
   
  }
});
*/
// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout:'layout',layoutsDir:__dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
 
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));


app.use(require('./routes/'));


//app.use('/', routes);
//app.use('/users', users);
//app.use('/orders', orders);
//app.use('/aboutyouforms', aboutyouforms);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
