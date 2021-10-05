var express = require('express');
var router = express.Router();
var UserModel = require('../model/user_model');
var StudModel = require('../model/user_student');
var EmpModel = require('../model/user_emp');
var UsersModel=require('../model/user_auth');
var ProdModel=require('../model/product');
var AdminModel=require('../model/admin');
var CatModel=require('../model/category');
var SubcatModel=require('../model/subcategory');
var Adpanel=require('../model/user_panel');
var CountryModel=require('../model/country');
var StateModel=require('../model/state');
var CityModel=require('../model/city');
var ProModel=require('../model/prod');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.post('/form-process', function(req, res, next) {
  
  const mybodydata = {
    user_name : req.body.nm,
    user_mobile : req.body.mno
  }
  var data = UserModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.send("Record Successfully Added")
    }
  })
  
});
router.get('/display', function(req, res, next) {
  UserModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('display',{mydata:data});
    }
  }).lean();
});
router.get('/delete/:id', function(req, res, next) {
  var deleteid = req.params.id;
  UserModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/display');
    }
  })
  
});
router.get('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  UserModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('edit',{mydata:data})
    }
  }).lean();

});
router.post('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  const mybodydata = {
    user_name : req.body.nm,
    user_mobile : req.body.mno
  }

  UserModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

      res.redirect('/display');
    }
  }).lean();

});

router.get('/reg', function(req, res, next) {
  res.render('student/reg', { title: 'Express' });
});

router.post('/reg-process', function(req, res, next) {
  
  const mybodydata = {
    stud_name : req.body.nm,
    stud_mobile : req.body.mno,
    stud_age:req.body.age
  }
  var data = StudModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.send("Record Successfully Added")
    }
  })
  
});

router.get('/displaystud', function(req, res, next) {
  StudModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('student/display',{mydata:data});
    }
  }).lean();
});
router.get('/deletestud/:id', function(req, res, next) {
  var deleteid = req.params.id;
  StudModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/displaystud')
    }
  })
  
});
router.get('/editstud/:id', function(req, res, next) {
  var editid = req.params.id;
  StudModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('student/edit',{mydata:data})
    }
  }).lean();

});
router.post('/editstud/:id', function(req, res, next) {
  var editid = req.params.id;
  const mybodydata = {
    stud_name : req.body.nm,
    stud_mobile : req.body.mno,
    stud_age:req.body.age
  }

  StudModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

      res.redirect('/displaystud');
    }
  }).lean();

});
router.get('/empreg', function(req, res, next) {
  res.render('employee/emp_reg');
});
router.post('/emp-process', function(req, res, next) {
  
  const mybodydata = {
    emp_name : req.body.nm,
    emp_mobile : req.body.mno,
    emp_age:req.body.age,
    emp_salary:req.body.sal
  }
  var data = EmpModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.send("Record Successfully Added")
    }
  })
  
});
router.get('/displayemp', function(req, res, next) {
  EmpModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('employee/display',{mydata:data});
    }
  }).lean();
});

router.get('/deleteemp/:id', function(req, res, next) {
  var deleteid = req.params.id;
  EmpModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/displayemp')
    }
  })
  
});
router.get('/editemp/:id', function(req, res, next) {
  var editid = req.params.id;
  EmpModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('employee/edit',{mydata:data})
    }
  }).lean();

});
router.post('/editemp/:id', function(req, res, next) {
  var editid = req.params.id;
  const mybodydata = {
    emp_name : req.body.nm,
    emp_mobile : req.body.mno,
    emp_age:req.body.age,
    emp_salary:req.body.sal
  }

  EmpModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

      res.redirect('/displayemp');
    }
  }).lean();

});

router.get('/regform', function(req, res, next) {
  res.render('userauth/regform', { title: 'Express' });
});
router.post('/regform', function (req, res, next) {
  console.log(req.body);

  //Create an Array 
  const mybodydata = {
    user_name: req.body.user_name,
    user_gender: req.body.user_gender,
    user_dob: req.body.user_dob,
    user_mobile: req.body.user_mobile,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
    user_isadmin: req.body.user_isadmin

  }
  var data = UsersModel(mybodydata);

  data.save(function (err) {
    if (err) {
      console.log("Error in Insert Record" + err);
    } else {
      console.log("Data Inserted")
      
      res.render('userauth/regform');
    }
  })

});
router.get('/login', function(req, res, next) {
  res.render('userauth/login', { title: 'Express' });
});
router.post('/login', function (req, res, next) {

  var email = req.body.user_email;
  var password = req.body.user_password;

  console.log(req.body);
  UsersModel.findOne({ "user_email": email }, function (err, db_users_array) {

    console.log("Find One " + db_users_array);

    if (db_users_array) {
      var db_name = db_users_array.user_name;
      var db_email = db_users_array.user_email;
      var db_password = db_users_array.user_password;

    }

    console.log("db_users_array.user_email " + db_email);
    console.log("db_users_array.user_password " + db_password);

    if (db_email == null) {
      console.log("If");
      res.end("Email not Found");
    }
    else if (db_email == email && db_password == password) {
      req.session.email = db_email;
      req.session.name = db_name;
       res.redirect('/home');
      
    }
    else {
      console.log("Credentials wrong");
      res.end("Login invalid");
    }

 
  });
});

router.get('/home', function (req, res, next) {

  console.log("Home Called " + req.session.email);
  var myemail = req.session.email;
  var myname= req.session.name;
  console.log(myemail);

  //Auth
  if (!req.session.email) {
    console.log("Email Session is Set");
    res.end("Login required to Access this page");
  }
  res.render('userauth/home', { myemail: myemail ,myname:myname});
});

router.get('/logout', function (req, res) {

  req.session.destroy();
  res.redirect("/login");
});

router.get('/change-password', function (req, res, next) {

  if (!req.session.email) {
    console.log("Email Session is Set");
    res.redirect('/login');
  }

  res.render('userauth/change-password');
});
router.post('/change-password', function (req, res, next) {
  if (!req.session.email) {
    console.log("Email Session is Set");
    res.redirect('/login');
  }
  console.log("Home Called " + req.session.email);
  var myemail = req.session.email;
  var opass = req.body.opass;
  var npass = req.body.npass;
  var cpass = req.body.cpass;

  UsersModel.findOne({ "user_email": myemail }, function (err, db_users_array) {

    if (err) {
      console.log("Error in Old Password Fetch " + err);
    } else {
      console.log(db_users_array);


      if (opass == db_users_array.user_password) {

        if (opass == npass) {
          res.end("New Password Must be Different then Old password");
        } else {

          if (npass == cpass) {

            UsersModel.findOneAndUpdate({ "user_email": myemail }, {$set: {"user_password": npass}}, function (err) {
           
              if(err)
              {
                res.end("Error in Update"+err);
              }else{ 

                res.send("Password Changed");
              }
           
            });



          } else {
            res.end("New Password and Confirm Password not match");
          }

        }

      } else {
        res.end("Old Password Not Match");
      }


    }


  });



});
router.get('/forgot', function (req, res, next) {
  res.render('userauth/forgot');
});
router.post('/forgot', function (req, res, next) {

  var email = req.body.user_email; 

  console.log(req.body);
  UsersModel.findOne({ "user_email": email }, function (err, db_users_array) {

    console.log("Find One " + db_users_array);

    if (db_users_array) {
      var db_email = db_users_array.user_email;
      var db_password = db_users_array.user_password;

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
router.get('/displayauth', function (req, res, next) {

  UsersModel.find(function (err, db_users_array) {
    if (err) {
      console.log("Error in Fetch Data " + err);
    } else {
      //Print Data in Console
      console.log(db_users_array);
      //Render User Array in HTML Table
      res.render('userauth/displayauth', { user_array: db_users_array });

    }
  });

});

router.get('/deleteauth/:id', function (req, res) {
  UsersModel.findByIdAndDelete(req.params.id, function (err, project) {
    if (err) {

      console.log("Error in Record Delete " + err);
      res.redirect('/displayauth');
    } else {

      console.log(" Record Deleted ");
      res.redirect('/displayauth');
    }
  });
});
router.get('/editauth/:id', function (req, res) {

  console.log(req.params.id);

  UsersModel.findById(req.params.id, function (err, db_users_array) {
    if (err) {
      console.log("Edit Fetch Error " + err);
    } else {
      console.log(db_users_array);
     

      res.render('userauth/edits', { user_array: db_users_array });

      // console.log(db_users_array.user_gender)
    }
  });
});








//Update Record Using Post Method
router.post('/editauth/:id', function (req, res) {

  console.log("Edit ID is" + req.params.id);

  const mybodydata = {
    user_name: req.body.user_name,
    user_mobile: req.body.user_mobile
  }

  UsersModel.findByIdAndUpdate(req.params.id, mybodydata, function (err) {
    if (err) {
      console.log("Error in Record Update");
      res.redirect('/displayauth');
    } else {

      res.redirect('/displayauth');
    }
  });
});
router.get('/proreg', function(req, res, next) {
  res.render('products/proreg', { title: 'Express' });
});

router.post('/pro-process', function(req, res, next) {
  var myfile = req.files.files123;
var myfilename = req.files.files123.name;
myfile.mv('public/images/'+myfilename, function(err) {
  if (err)
  throw err;
  //res.send('File uploaded!');
  });
  
  console.log("File Send Success")
  const mybodydata = {
    prod_name : req.body.pnm,
    prod_details : req.body.pdt,
    prod_price:req.body.ppr,
    prod_qty:req.body.pqt,
    prod_image:myfilename
  }
  var data = ProdModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.send("Record Successfully Added")
    }
  })
  
});
router.get('/displayprod', function (req, res, next) {

  ProdModel.find(function (err, db_users_array) {
    if (err) {
      console.log("Error in Fetch Data " + err);
    } else {
      //Print Data in Console
      console.log(db_users_array);
      //Render User Array in HTML Table
      res.render('products/displayprod', { user_array: db_users_array });

    }
  });

});
router.get('/deleteprod/:id', function(req, res, next) {
  var deleteid = req.params.id;
  ProdModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/displayprod')
    }
  })
  
});
router.get('/editprod/:id', function(req, res, next) {
  var editid = req.params.id;
  ProdModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('products/editprod',{mydata:data})
    }
  }).lean();

});
router.post('/editprod/:id', function(req, res, next) {
  
  var editid = req.params.id;
  var myfile = req.files.files123;
var myfilename = req.files.files123.name;
myfile.mv('public/images/'+myfilename, function(err) {
  if (err)
  throw err;
  //res.send('File uploaded!');
  });
  
  const mybodydata = {
    prod_name : req.body.pnm,
    prod_details : req.body.pdt,
    prod_price:req.body.ppr,
    prod_qty:req.body.pqt,
    prod_image:myfilename
  }

  ProdModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

      res.redirect('/displayprod');
    }
  }).lean();

});

router.get('/catreg', function(req, res, next) {
  res.render('category/catreg', { title: 'Express' });
});
router.post('/cat-process', function(req, res, next) {
  
  const mybodydata = {
    cat_name : req.body.cnm,
    
  }
  var data = CatModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.send("Record Successfully Added")
    }
  })
  
});
router.get('/displaycat', function(req, res, next) {
  CatModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('category/displaycat',{mydata:data});
    }
  }).lean();
});
router.get('/deletecat/:id', function(req, res, next) {
  var deleteid = req.params.id;
  CatModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/displaycat');
    }
  })
  
});
router.get('/editcat/:id', function(req, res, next) {
  var editid = req.params.id;
  CatModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('category/editcat',{mydata:data})
    }
  }).lean();

});
router.post('/editcat/:id', function(req, res, next) {
  var editid = req.params.id;
  const mybodydata = {
    cat_name : req.body.cnm,
  }

  CatModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

      res.redirect('/displaycat');
    }
  }).lean();

});

router.get('/adminreg', function(req, res, next) {
  res.render('admin/adminreg', { title: 'Express' });
});
router.post('/admin-process', function(req, res, next) {
  
  const mybodydata = {
    admin_name : req.body.anm,
    admin_user : req.body.user,
    admin_pass : req.body.pass,
  }
  var data = AdminModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.redirect('/adminlogin')
    }
  })
  
});
router.get('/displayadmin', function(req, res, next) {
  AdminModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('admin/displayadmin',{mydata:data});
    }
  }).lean();
});
router.get('/deleteadmin/:id', function(req, res, next) {
  var deleteid = req.params.id;
  AdminModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/displayadmin');
    }
  })
  
});
router.get('/editadmin/:id', function(req, res, next) {
  var editid = req.params.id;
  AdminModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('admin/editadmin',{mydata:data})
    }
  }).lean();

});
router.post('/editadmin/:id', function(req, res, next) {
  var editid = req.params.id;
  const mybodydata = {
    admin_name : req.body.anm,
    admin_user : req.body.user,
    admin_pass : req.body.pass,
  }

  AdminModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

      res.redirect('/displayadmin');
    }
  }).lean();

});


router.get('/adminlogin', function(req, res, next) {
  res.render('admin/adminlogin', { title: 'Express' });
});
router.post('/adminlogin', function (req, res, next) {

  var email = req.body.user;
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
       res.redirect('/homeadmin');
       //res.send("Hii")
      
    }
    else {
      console.log("Credentials wrong");
      res.end("Login invalid");
    }

 
  });
});

router.get('/homeadmin', function (req, res, next) {

  console.log("Home Called " + req.session.adminuser);
  var myemail = req.session.adminuser;
  var myname= req.session.adminname;
  console.log(myemail);

  //Auth
  if (!req.session.adminuser) {
    console.log("Email Session is Set");
    res.end("Login required to Access this page");
  }
  res.render('admin/homeadmin', { myemail: myemail ,myname:myname});
});

router.get('/logoutadmin', function (req, res) {

  req.session.destroy();
  res.redirect("/adminlogin");
});

router.get('/change-adminpassword', function (req, res, next) {

  if (!req.session.adminuser) {
    console.log("Email Session is Set");
    res.redirect('/adminlogin');
  }

  res.render('admin/change-adminpassword');
});
router.post('/change-adminpassword', function (req, res, next) {
  if (!req.session.adminuser) {
    console.log("Email Session is Set");
    res.redirect('/adminlogin');
  }
  console.log("Home Called " + req.session.adminuser);
  var myemail = req.session.adminuser;
  var opass = req.body.opass;
  var npass = req.body.npass;
  var cpass = req.body.cpass;

  AdminModel.findOne({ "admin_user": myemail }, function (err, db_users_array) {

    if (err) {
      console.log("Error in Old Password Fetch " + err);
    } else {
      console.log(db_users_array);


      if (opass == db_users_array.admin_pass) {

        if (opass == npass) {
          res.end("New Password Must be Different then Old password");
        } else {

          if (npass == cpass) {

            AdminModel.findOneAndUpdate({ "admin_user": myemail }, {$set: {"admin_pass": npass}}, function (err) {
           
              if(err)
              {
                res.end("Error in Update"+err);
              }else{ 

                res.send("Password Changed");
              }
           
            });



          } else {
            res.end("New Password and Confirm Password not match");
          }

        }

      } else {
        res.end("Old Password Not Match");
      }


    }


  });



});
router.get('/forgotadmin', function (req, res, next) {
  res.render('admin/forgotadmin');
});
router.post('/forgotadmin', function (req, res, next) {

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

     if (db_email == email) {
     
      
      

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
router.get('/search', function(req, res, next) {
  res.render('products/search', { title: 'Express' });
});

router.post('/search-process', function (req, res, next) {

  var sname = req.body.snm;

  console.log(req.body);
  ProdModel.findOne({ "prod_name": {
    '$regex':sname,
    '$options':'i '
  } }, function (err, db_users_array) {

    console.log("Find One " + db_users_array);

    if (db_users_array) {
      res.render('products/searchdis',{user_array:db_users_array,sname:sname})
      

    }
    else
    {
      res.send("Not Found Data")
    }

    
    

     
      

      
});
});

router.get('/loginad', function(req, res, next) {
  res.render('loginad', { title: 'Express' });
});
router.post('/loginad-process', function (req, res, next) {

  var email = req.body.user_email;
  var password = req.body.user_pass;

  console.log(req.body);
  Adpanel.findOne({ "user_email": email }, function (err, db_users_array) {

    console.log("Find One " + db_users_array);

    if (db_users_array) {
      var db_name = db_users_array.user_fname;
      var db_email = db_users_array.user_email;
      var db_password = db_users_array.user_password;

    }

    console.log("db_users_array.user_email " + db_email);
    console.log("db_users_array.user_password " + db_password);

    if (db_email == null) {
      console.log("If");
      res.end("Email not Found");
    }
    else if (db_email == email && db_password == password) {
      req.session.email = db_email;
      req.session.name = db_name;
       res.redirect('/homead');
      
    }
    else {
      console.log("Credentials wrong");
      res.end("Login invalid");
    }

 
  });
});

router.get('/homead', function (req, res, next) {

  console.log("Home Called " + req.session.email);
  var myemail = req.session.email;
  var myname= req.session.name;
  console.log(myemail);

  //Auth
  if (!req.session.email) {
    console.log("Email Session is Set");
    res.end("Login required to Access this page");
  }
  

  ProdModel.find(function (err, db_users_array) {
    if (err) {
      console.log("Error in Fetch Data " + err);
    } else {
      //Print Data in Console
      console.log("aman",db_users_array);
      //Render User Array in HTML Table
      res.render('homead', { user_array: db_users_array });

    }
  });
  //res.render('add-category');
  
  
});
router.get('/showcat/:id', function(req, res, next) {
  var editid = req.params.id;
  ProdModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('showcat',{mydata:data})
    }
  }).lean();

});

router.get('/logout', function (req, res) {

  req.session.destroy();
  res.redirect("/login");
});
router.get('/signupad', function(req, res, next) {
  res.render('signupad', { title: 'Express' });
});
router.post('/signad-process', function (req, res, next) {
  console.log(req.body);

  //Create an Array 
  const mybodydata = {
    user_fname: req.body.fnm,
    user_lname: req.body.lnm,
    user_email: req.body.eml,
    user_password: req.body.pas,
    user_gender: req.body.user_gen,
    user_dob: req.body.dob,
    user_time: req.body.tym,
    user_city: req.body.cty,
    user_state: req.body.ste,
    user_text:req.body.textar,
    user_hobbies:req.body.mulhob
    

  }
  var data = Adpanel(mybodydata);

  data.save(function (err) {
    if (err) {
      console.log("Error in Insert Record" + err);
    } else {
      console.log("Data Inserted")
      
      res.redirect('/loginad')
    }
  })

});
router.get('/displayad', function(req, res, next) {
  Adpanel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('displayad',{mydata:data});
    }
  }).lean();
});
router.get('/logoutad', function (req, res) {

  req.session.destroy();
  res.redirect("/loginad");
});

router.get('/dash', function(req, res, next) {
  res.render('dash', { title: 'Express' });
});

router.get('/addsub', function(req, res, next) {

  CatModel.find(function(err, db_category_array) {
      if (err) {
          console.log("Error in Fetch Data " + err);
        } else {
          //Print Data in Console
          console.log(db_category_array);
          //Render User Array in HTML Table
          res.render('subcategory/addsub', { mydata : db_category_array });
          
        }
    });
//res.render('add-category');
});
router.post('/addsub', function(req, res, next) {
  console.log(req.body);
 
  //Create an Array 
  const mybodydata = {
    sub_category_name: req.body.sub_category_name,
    _category: req.body._category
   
    }
 
    console.log("Name is "  + req.body.sub_category_name);
    console.log("ID is "  + req.body._category);
 
var data = SubcatModel(mybodydata);
 
data.save(function(err) {
    if (err) {
       console.log("Error in Insert Record");
    } else {
        res.send("Data Added")
    }
})

});
router.get('/displaysub', function(req, res, next) {

  SubcatModel.find(function(err, db_subcategory_array){
      
      console.log(db_subcategory_array);

      if (err) res.json({message: 'There are no posts here.'});

      SubcatModel.find({})
      .populate('_category')
    
        .exec(function(err, db_subcategory_array) {

          console.log(db_subcategory_array);
       
          res.render("subcategory/displaysub", { subcategory_array: db_subcategory_array });
        })
    });
 
});
router.get('/deletesub/:id', function(req, res) {
  SubcatModel.findByIdAndDelete(req.params.id, function(err, project) {
      if (err) {

        console.log("Error in Record Delete " + err);
          res.redirect('/displaye');
      } else {

        console.log(" Record Deleted ");
          res.redirect('/displaysub');
      }
  });
});
router.get('/editsub/:id', function(req, res) {

  console.log(req.params.id);
  
  SubcatModel.findById(req.params.id, function(err, db_subcategory_array) {
      if (err) {
          console.log("Edit Fetch Error " + err);
      } else {
          console.log(db_subcategory_array);

          res.render('subcategory/editsub', { subcategory_array: db_subcategory_array });
      }
  });
});
router.post('/editsub/:id', function(req, res) {

  console.log("Edit ID is"+ req.params.id);

  const mybodydata = {
    sub_category_name: req.body.sub_category_name,
    _category: req.body._category
  }

  SubcatModel.findByIdAndUpdate(req.params.id, mybodydata, function(err) {
      if (err) {
          console.log("Error in Record Update");
          res.redirect('/subcategory/display');
      } else {
        
          res.redirect('/displaysub');
      }
  });
});
router.get('/country', function(req, res, next) {
  res.render('country/coun', { title: 'Express' });
});

router.post('/coun-process', function(req, res, next) {
  
  const mybodydata = {
    country_name : req.body.counnm,
    
  }
  var data = CountryModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      console.log("Record Added");
      res.redirect('/state')
    }
  })
  
});
router.get('/displaycoun', function(req, res, next) {
  CountryModel.find(function(err,data){
    if(err){
      console.log("Error in Fetch Data" + err);
    }else{
      console.log("Record Data is " + data);
      res.render('country/displaycoun',{mydata:data});
    }
  }).lean();
});
router.get('/deletecoun/:id', function(req, res, next) {
  var deleteid = req.params.id;
  CountryModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/displaycoun');
    }
  })
  
});

router.get('/state', function(req, res, next) {

  CountryModel.find(function(err, db_category_array) {
      if (err) {
          console.log("Error in Fetch Data " + err);
        } else {
          //Print Data in Console
          console.log(db_category_array);
          //Render User Array in HTML Table
          res.render('state/ste', { mydata : db_category_array });
          
        }
    });
//res.render('add-category');
});
router.post('/state-process', function(req, res, next) {
  console.log(req.body);
 
  //Create an Array 
  const mybodydata = {
    state_name: req.body.ste,
    _category: req.body._category
   
    }
 
    console.log("Name is "  + req.body.ste);
    console.log("ID is "  + req.body._category);
 
var data = StateModel(mybodydata);
 
data.save(function(err) {
    if (err) {
       console.log("Error in Insert Record");
    } else {
        res.redirect('/city')
    }
})

});
router.get('/displaystate', function(req, res, next) {

  StateModel.find(function(err, db_subcategory_array){
      
      console.log(db_subcategory_array);

      if (err) res.json({message: 'There are no posts here.'});

      StateModel.find({})
      .populate('_category')
    
        .exec(function(err, db_subcategory_array) {

          console.log(db_subcategory_array);
       
          res.render("state/displaystate", { subcategory_array: db_subcategory_array });
        })
    });
 
});
router.get('/city', function(req, res, next) {

  
    StateModel.find(function(err, db_category_state) {
      if (err) {
          console.log("Error in Fetch Data " + err);
        } else {
                    console.log("aa",db_category_state);
                    
                     
                    CountryModel.find(function(err, db_category_array) {
                      if (err) {
                          console.log("Error in Fetch Data " + err);
                        } else {
                          //Print Data in Console
                          console.log("mm",db_category_array);
                          //Render User Array in HTML Table
                          res.render('city/city', { mydata:db_category_state,mycountry : db_category_array });
                          
                        }
                
                       
                    });  
                     
          
          
        }
    });
    
   
//res.render('add-category');
});
router.post('/city-process', function(req, res, next) {
  console.log(req.body);
 
  //Create an Array 
  const mybodydata = {
    city_name: req.body.cty,
    _category: req.body._category,
    _states:req.body._states
   
    }
 
    console.log("Name is "  + req.body.cty);
    console.log("ID is "  + req.body._category);
    console.log("City Cat is "  + req.body._states);
var data = CityModel(mybodydata);
 
data.save(function(err) {
    if (err) {
       console.log("Error in Insert Record");
    } else {
        res.redirect('/displaycity')
    }
})

});
router.get('/displaycity', function(req, res, next) {

  CityModel.find(function(err, db_subcategory_array){
      
//      console.log("aman",db_subcategory_array);

      if (err) res.json({message: 'There are no posts here.'});

       CityModel.find({
         mobile:'Samsung'
       })
       .populate('_category _states')
    
        .exec(function(err, db_subcategory_array) {

           console.log("neema",db_subcategory_array);
       
          res.render("city/displaycity", { subcategory_array: db_subcategory_array });
       })
    });
 
});

router.get('/addsubcat', function(req, res, next) {

  SubcatModel.find(function(err, db_category_array) {
      if (err) {
          console.log("Error in Fetch Data " + err);
        } else {
          //Print Data in Console
          console.log(db_category_array);
          //Render User Array in HTML Table
          res.render('products/addsubcat', { mydata : db_category_array });
          
        }
    });
//res.render('add-category');
});
router.post('/addsubcat', function(req, res, next) {
  console.log(req.body);
 
  //Create an Array 
  const mybodydata = {
    prod_name: req.body.proname,
    prod_price: req.body.proprice,
    _subcategory: req.body._subcategory
   
    }
 
    
 
var data = ProModel(mybodydata);
 
data.save(function(err) {
    if (err) {
       console.log("Error in Insert Record");
    } else {
        res.send("Data Added")
    }
})

});
router.get('/displaysubcat', function(req, res, next) {

  ProModel.find(function(err, db_subcategory_array){
      
      console.log(db_subcategory_array);

      if (err) res.json({message: 'There are no posts here.'});

      ProModel.find({})
      .populate('_subcategory')
    
        .exec(function(err, db_subcategory_array) {

          console.log("aman",db_subcategory_array);
        //  res.send("Hii");
          res.render("products/displaysubcat", { subcategory_array: db_subcategory_array });
        })
    });
 
});
module.exports = router;
