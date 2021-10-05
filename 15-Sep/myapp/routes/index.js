var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/reg', function(req, res, next) {
  res.render('Register', { title: 'Express' });
});
router.post('/reg', function(req, res,next) {
  var a=req.body.fnm;
  var b=req.body.lnm
  res.render('show', {fname: a, lname: b});

});
module.exports = router;
