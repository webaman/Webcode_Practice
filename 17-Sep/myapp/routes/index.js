var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/succ', function(req, res, next) {
  res.render('succ', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  var a=req.body.em
  var b=req.body.pass
  var msg=""
  if(a=="aman@gmail.com" && b=="aman")
  {
    res.render('succ', { mymsg:msg="Hey Welcome User"}); 
  }
  else
  {
    res.render('succ', { mymsg:msg="Invalid User"}); 
  }
  
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  var a=req.body.fnm
  var b=req.body.lnm
  var c=req.body.em
  var d=req.body.pass
  var e=req.body.city
  var f=req.body.state

  res.render('data', { first:a,last:b,email:c,pass:d,cty:e,ste:f });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Express' });
});
router.get('/marksheet', function(req, res, next) {
  res.render('Marksheet', { title: 'Express' });
});
router.post('/marksheet', function(req, res, next) {

  var a=parseInt(req.body.eng)
  var b=parseInt(req.body.hind)
  var c=parseInt(req.body.phy)
  var d=parseInt(req.body.chm)
  var e=parseInt(req.body.math)
  var g=""
  var s=a+b+c+d+e;
  var t=(s/500)*100;
  if(t>90)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="A+"});
  }
  else
  if(t>81 && t<=90)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="A"});
  }
  else
  if(t>71 && t<=80)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="B+"});
  }
  else
  if(t>61 && t<=70)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="B"});
  }
  else
  if(t>51 && t<=60)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="C+"});
  }
  else
  if(t>41 && t<=50)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="C"});
  }
  else
  if(t<=40)
  {
    res.render('Marksob', { english:a,hindi:b,physics:c,chemistry:d,maths:e,sum:s ,per:t,grade:g="Fail"});
  }
});
router.post('/form', function(req, res, next) {
  var fname=req.body.fnm
  var lname=req.body.lnm
  res.render('show',{first:fname , last:lname});
});
module.exports = router;
