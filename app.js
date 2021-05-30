var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


var logger = require('morgan');
var ejs =require('ejs');
var mysql =require('mysql');

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var new1Router =require('./routes/new1');
var new2Router =require('./routes/new2');
var new3Router =require('./routes/new3');
var new4Router =require('./routes/new4');
var new5Router =require('./routes/new5');



var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:"text",
  cookie:{maxAge:60000},
  resave:false,
  saveUninitialized:true
}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/new1',new1Router);
app.use('/new2',new2Router);
app.use('/new3',new3Router);
app.use('/new4',new4Router);
app.use('/new5',new5Router);//后台//增加
//删除

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
