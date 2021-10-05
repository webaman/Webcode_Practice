var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('I am Login of Users');
});
router.get('/about', function(req, res, next) {
  res.send('I am about of Users');
});
module.exports = router;
