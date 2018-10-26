
//All required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//All URL routes
var indexRouter = require('./routes/index');



//Lauch Express
var app = express();

// Set the templating motor
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set all midleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set all static file routes
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist/js'));
app.use('/js', express.static('node_modules/popper.js/dist/'));
app.use('/js', express.static('public/javascripts'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/css', express.static('public/stylesheets'));

//Set all static routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
