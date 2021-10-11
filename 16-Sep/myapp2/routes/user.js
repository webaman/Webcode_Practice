var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
    res.render('admin/user/add', { title: 'Express' });
  });
router.get('/login', function(req, res, next) {
    res.render('admin/account/login', { title: 'Express' });
  });
  router.post('/login', function (req, res, next) {

    var email = req.body.eml;
    var password = req.body.pass;
  
    console.log(req.body);
    AdminModel.findOne({ "admin_user": email }, function (err, db_users_array) {
  
      console.log("Find One " + db_users_array);
  
      if (db_users_array) {
        var db_name = db_users_array.admin_name;
        var db_user = db_users_array.admin_user;
        var db_password = db_users_array.admin_pass;
  
      }
  
      console.log("db_users_array.user_email " + db_user);
      console.log("db_users_array.user_password " + db_password);
  
      if (db_user == null) {
        console.log("If");
        res.end("Email not Found");
      }
      else if (db_user === email && db_password === password) {
        req.session.adminuser = db_user;
        req.session.adminname = db_name;
        //console.log("aas",req.session.adminuser)
         res.redirect('dash');
         //res.send("Hii")
        
      }
      else {
        console.log("Credentials wrong");
        res.end("Login invalid");
      }
  
   
    });
  });
  router.get('/dash', function (req, res, next) {

    console.log("Home Called " + req.session.adminuser);
    var myemail = req.session.adminuser;
    var myname= req.session.adminname;
    console.log(myemail);
    console.log(myname);
    //Auth
    if (!req.session.adminuser) {
      console.log("Email Session is Set");
      res.end("Login required to Access this page");
    }
    res.render('admin/account/dash', { myemail: myemail ,myname:myname});
  });
  
  router.get('/signup', function(req, res, next) {
    res.render('admin/account/signup', { title: 'Express' });
  });
  router.post('/signup', function(req, res, next) {
  
    const mybodydata = {
      admin_name : req.body.anm,
      admin_user : req.body.eml,
      admin_pass : req.body.pass,
    }
    var data = AdminModel(mybodydata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        res.redirect('login')
      }
    })
    
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
