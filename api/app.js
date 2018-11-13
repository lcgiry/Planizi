//------------------------------ All required modules from Node repositories -----------------------------------
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MemoryStore = require('memorystore')(session)
var passport = require('passport');
var fileUpload = require('express-fileupload');
var errorResponse = require('./errors/errors-response');

//------------------------------ All required modules from Planizi repository -----------------------------------
var authenticationConfig = require('./config/authentication/config-authentication');
authenticationConfig.googleAuthenticationConfiguration

//All URL routes
var indexRouter = require('./routes/index');
var authenticationRouter = require ('./routes/authentication');
var registrationRouter = require('./routes/registration');
var userRouter = require('./routes/user');

//------------------------------ Main Ssettings -----------------------------------
//Start express for the server
var app = express();

// Set the templating motor
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//------------------------------ SET MIDDLEWARE -----------------------------------
//Set all GENERIC midleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	store: new MemoryStore(),
	secret: 'keyboard cat'
}));
app.use(passport.initialize());
//app.use(passport.session());

//Set all STATIC ROUTES FOR FILES
app.use('/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/js', express.static('node_modules/jquery/dist'));
app.use('/js', express.static('node_modules/popper.js/dist/'));
app.use('/js', express.static('public/javascripts'));
app.use('/img', express.static('public/images'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/css', express.static('node_modules/font-awesome/css'));
app.use('/css', express.static('public/stylesheets'));
app.use('/assets', express.static('public/template-assets'));

//Set all STATIC ROUTES FOR ROUTER
app.use('/', indexRouter);
app.use('/authentication', authenticationRouter);
app.use("/registration", registrationRouter);
app.use("/user", userRouter);

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
  res.send(errorResponse.GenericError(err.name, err.status, err.message));
});


//------------------------------ Exports -----------------------------------
module.exports = app;