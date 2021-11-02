"use strict";
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const exphbs  = require('express-handlebars');
const fileUpload = require('express-fileupload');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const session = require('express-session')
const mongoose=require('mongoose');
const _handlebars = require('handlebars'); 
var helpers = require('handlebars-helpers')({
  handlebars: _handlebars
});
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mydata:mydb%4011@localhost:27017/mydata')
.then(()=>console.log("Connection Established"))
.catch(()=>console.log("Error"))  

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
defaultLayout: false,

handlebars: allowInsecurePrototypeAccess(_handlebars),
"helpers":helpers

}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))


app.set('view engine', 'handlebars');
const hbs = exphbs.create({});

_handlebars.registerHelper("stringify", function(data){
  return JSON.stringify(data);
});

_handlebars.registerHelper('ifIn', function(value,array,options) {
  
  console.log("am",value)
  console.log("ne",array)

  if(Array.isArray(array)&& (array.length!==0) && value!==0)
  {
    if(array.includes(value)){
      return options.fn(this)
  }  
 }
  return options.inverse(this) 
    

 

});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
