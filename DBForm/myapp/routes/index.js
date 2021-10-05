var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Express' });
});
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'Express' });
});
router.post('/add', function(req, res, next) {
  var a=req.body.nm
  var b=req.body.mno

  res.send("Name is:" +a +" "+ "Mobile No" +b)
});
module.exports = router;
