var express = require('express');
var router = express.Router();
var AdminModel=require('../model/admin');
const { check, validationResult } = require('express-validator');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
    res.render('admin/account/login', { title: 'Express' });
  });
  router.post('/login', function (req, res, next) {

    var email = req.body.email;
    var password = req.body.password;
  
    console.log(req.body);
    AdminModel.findOne({ "admin_user": email }, function (err, db_users_array) {
  
      console.log("Find One " + db_users_array);
  
      if (db_users_array) {
        var db_id=(db_users_array._id);
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
        req.session.adminid=db_id
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
    var myid=req.session.adminid
    console.log('req.session', req.session);

    //Auth
    if (!req.session.adminuser) {
      console.log("Email Session is Set");
      res.end("Login required to Access this page");
    }
    res.render('admin/account/dash', { myemail: myemail ,myname:myname,myid:myid});
  });
  
  router.get('/signup', function(req, res, next) {
    res.render('admin/account/signup', { title: 'Express' });
  });
  router.post('/signup', [ check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10 }).normalizeEmail().custom((value, {req, loc, path}) => {
    return AdminModel.findOne({admin_user: req.body.email}).then(user => {
      console.log("aman",user);
      
        if (user.email) {
          return true;
            //return Promise.reject('Username already in use');
        }
        else
        {
          return false;
        }
    });
})],function(req, res, next) {
  
    const mybodydata = {
      admin_name : req.body.anm,
      admin_user : req.body.email,
      admin_pass : req.body.password,
      admin_cpass : req.body.cpassword,
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
  router.post('/forgot-password', function (req, res, next) {

    var email = req.body.user_email; 
  
    console.log(req.body);
    AdminModel.findOne({ "admin_user": email }, function (err, db_users_array) {
  
      console.log("Find One " + db_users_array);
  
      if (db_users_array) {
        var db_email = db_users_array.admin_user;
        var db_password = db_users_array.admin_pass;
  
      }
  
      console.log("db_users_array.user_email " + db_email);
      console.log("db_users_array.user_password " + db_password);
  
      if (db_email == null) {
        console.log("If");
        res.end("Email not Found");
      }
      else if (db_email == email) {
       
        
        
  
        "use strict";
  const nodemailer = require("nodemailer");
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main(){
  
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let account = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "sharmarohanrs8@gmail.com", 
            pass: "rohan@123",
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Forgot Password" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: "Forgot Password", // Subject line
      text: "Hello your password is "  + db_password, // plain text body
      html: "Hello your password is "  + db_password // html body
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)
  
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
    res.end("Password Sent on your Email");
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
  
  
        
      }
      else {
        console.log("Credentials wrong");
        res.end("Not found");
      }
  
   
    });
  });

  router.get('/profile/:id', function(req, res, next) {
    var editid = req.params.id;
    AdminModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log("Aman",data);
        res.render('admin/account/profile',{mydata:data})
      }
    }).lean();
  
  });
module.exports = router;
