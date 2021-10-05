var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {

  var a=req.body.fnm;
  var b=req.body.lnm;
  res.render('datashow', { fname:a,lname:b });
});

module.exports = router;
