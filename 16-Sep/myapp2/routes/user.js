var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
    res.render('admin/user/add', { title: 'Express' });
  });

  router.get('/display', function(req, res, next) {
    Staind.find(function(err,data){
      if(err){
        console.log("Error in Fetch Data" + err);
      }else{
        console.log("Record Data is " + data);
        res.render('admin/state/display',{mydata:data});
      }
    }).lean();
  });
  router.get('/logout', function (req, res) {

    req.session.destroy();
    res.redirect('login');
  });
  // router.get('/dash', function(req, res, next) {
  //   res.render('admin/account/dash', { title: 'Express' });
  // });
  router.get('/change-password', function(req, res, next) {
    res.render('admin/account/change-password', { title: 'Express' });
  });
  router.get('/forgot-password', function(req, res, next) {
    res.render('admin/account/forgot-password', { title: 'Express' });
  });


module.exports = router;
