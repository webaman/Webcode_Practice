var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dash', function(req, res, next) {
  res.render('dash', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});
router.get('/editor', function(req, res, next) {
  res.render('editor', { title: 'Express' });
});
router.get('/simpletab', function(req, res, next) {
  res.render('simpletab', { title: 'Express' });
});
router.get('/datatab', function(req, res, next) {
  res.render('datatab', { title: 'Express' });
});
module.exports = router;
