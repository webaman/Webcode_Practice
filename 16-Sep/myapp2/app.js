var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose=require('mongoose')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
var session = require('express-session')
var indexRouter = require('./routes/index');
var AdminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
var ProductRouter = require('./routes/products');
var StateRouter = require('./routes/states');
var CityRouter = require('./routes/city');
var CategoryRouter = require('./routes/category');
var SubCategoryRouter = require('./routes/subcategory');
var AreaRouter = require('./routes/area');
var UserRouter = require('./routes/user');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mydata:mydb%4011@localhost:27017/mydata')
.then(()=>console.log("Connection Established"))
.catch(()=>console.log("Error"))
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', AdminRouter);
app.use('/admin/products', ProductRouter);
app.use('/admin/state', StateRouter);
app.use('/admin/city', CityRouter);
app.use('/admin/category', CategoryRouter);
app.use('/admin/subcategory',SubCategoryRouter);
app.use('/admin/area',AreaRouter);
app.use('/admin/user',UserRouter);
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
