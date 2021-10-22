`use strict`;
const express = require('express');
const { check, validationResult } = require('express-validator');
const AdminData=require('../model/admin');
const RegisterData=require('../model/register');
const router = express.Router();
const repo = require('./repository')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/form-process',[
  check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10 }).normalizeEmail().custom((value, {req, loc, path}) => {
    return AdminData.findOne({email: req.body.email}).then(user => {
      console.log("aman",user);
      
        if (user) {
          
          return Promise.reject('Username already in use');
          
       
          }
  
    });
}),
  check('name', 'Name length should be 10 to 20 characters').isLength({ min: 2, max: 20 }),
  check('password', 'Password length should be 8 to 10 characters').isLength({ min: 8, max: 10 })
], function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else
    {
      const mybodydata = {
        name : req.body.name,
        email : req.body.email,
        password:req.body.password
      }
      var data = AdminData(mybodydata);
    
      data.save(function(err){
        if(err){
          console.log("Error in Add Record" + err);
        }else{
          
          res.send("Record Successfully Added")
        }
      })
    }
});
router.post('/login-process',[
  check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10 }),
  check('password', 'Password length should be 8 to 10 characters').isLength({ min: 8, max: 10 }),
  
], function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else
    {
      var email = req.body.email;
  var password = req.body.password;

  console.log(req.body);
  AdminData.findOne({ "email": email }, function (err, db_users_array) {

    console.log("Find One " + db_users_array);

    if (db_users_array) {
      var db_name = db_users_array.name;
      var db_email = db_users_array.email;
      var db_password = db_users_array.password;

    }

    console.log("db_users_array.user_email " + db_email);
    console.log("db_users_array.user_password " + db_password);

    if (db_email == null) {
      console.log("If");
      res.end("Email not Found");
    }
    
    else if (db_email == email && db_password == password) {
      res.send(`Welcome ${db_name}`)
      
    }
    else {
      console.log("Credentials wrong");
      res.end("Password Invalid");
    }

 
  });
    }
});
router.post('/register-process',[
  check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10 }).normalizeEmail().custom((value, {req, loc, path}) => {
    return RegisterData.findOne({email: req.body.email}).then(user => {
      console.log("aman",user);
      
        if (user) {
          console.log("aam",user);
            return Promise.reject('Username already in use');
        }
    });
}),
check('name', 'Name length should be 10 to 20 characters').isLength({ min: 2, max: 20 }).isAlpha('en-US', {ignore: '\s'}).withMessage('Name Must be Alphabetic'),
  check('password', 'Password length should be 8 to 10 characters').isLength({ min: 8, max: 10 }),
  check('age').notEmpty().withMessage('Not Empty').custom((value, {req}) => {
    if (value < 18) {
      console.log("aaa",value);
      return Promise.reject('Age must be consider above 18');
    }
    else
    {
      return value;
    }
    
   }),
   check('mobile').isNumeric().withMessage('Mobile No Must contain only digit').isLength({ min: 10, max: 10 })
   .withMessage('Mobile No Must contain 10 digit')
   .matches('^[6-9][0-9]{9}$').withMessage('Mobile No. is Invalid '),
   check('add').notEmpty().trim().isLength({ min: 10, max: 80 })
   .withMessage('Address have max 20 words').isAlphanumeric().withMessage('Address have both number as well as string')
], function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("aa",errors)
      return res.render('form',{errors:errors})
     // return res.status(400).json({ errors: errors.array() });
      
    }
    else
    {
      const mybodydata = {
        name : req.body.name,
        email : req.body.email,
        password:req.body.password,
        age:req.body.age,
        mobile:req.body.mobile,
        address:req.body.add
      }
      const data = RegisterData(mybodydata);
    
      data.save(function(err){
        if(err){
          console.log("Error in Add Record" + err);
        }else{
          
          res.send("Record Successfully Added")
        }
      })

      
    }
});
router.get('/form', function (req, res) {
  res.render('form', {
      success: req.session.success,
      errors: req.session.errors
  });
  req.session.errors = null;
});
module.exports = router;

