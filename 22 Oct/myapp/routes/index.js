`use strict`;
const express = require('express');
const { check, validationResult,jkl } = require('express-validator');
const AdminData=require('../model/admin');
const RegisterData=require('../model/register');
const router = express.Router();
const repo = require('./repository')
const forge = require('node-forge');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('admin/signup', { title: 'Express' });
});
router.post('/signup',[
  check('name', 'Name length should be 10 to 20 characters').isLength({ min: 2, max: 20 }).isAlpha('en-US', {ignore: '\s'}).withMessage('Name Must be Alphabetic'),
  check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10 }).normalizeEmail().custom((value, {req, loc, path}) => {
    return AdminData.findOne({email: req.query.email}).then(user => {
      console.log("aman",user);
      
        if (user) {
          console.log("aam",user);
            return Promise.reject('Username already in use');
        }
    });
}),

  check('password', 'Password length should be 8 to 10 characters').isLength({ min: 4, max: 10 }),
   check('mobile')
   .matches('^[6-9][0-9]{9}$').withMessage('Mobile No. is Invalid ').custom((value, {req, loc, path}) => {
    return AdminData.findOne({mobile: req.body.mobile}).then(user => {
      console.log("aman",user);
      
        if (user) {
          console.log("aam",user);
            return Promise.reject('Mobile No. already in use');
        }
    })
  })
   
], function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("aa",errors)
      return res.render('admin/signup',{errors:errors})
     // return res.status(400).json({ errors: errors.array() });
      
    }
    else
    {
      var md = forge.md.sha512.create();
md.update(req.body.password);
const pass=md.digest().toHex()
      const mybodydata = {
        name : req.body.name,
        email : req.body.email,
        password:pass,
        mobile:req.body.mobile,
      }
      const data = AdminData(mybodydata);
    
      data.save(function(err){
        if(err){
          console.log("Error in Add Record" + err);
        }else{
          
          res.send("Record Successfully Added")
        }
      })

      
    }
});

router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
});
router.post('/login', function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else
    {
      var email = req.body.email;
  var password = req.body.password;

  console.log(req.body);
  AdminData.findOne({ "email": email }, function (err, user) {
    var md = forge.md.sha512.create();
md.update(user.password);
const pass=md.digest().toHex()
    if(!user){
      return res.end("Email or password are not valid"); 
    }
    if(pass !== password){
      
      return res.end("Email or password are not valid"); 
    }
    return res.send(`Welcome ${user.name}`)
  });
    }
});
router.get('/validateEmail', function(req, res, next) {
  const email=req.query.email;
  
  AdminData.findOne({ "email": email }, function (err, user) {
 
    if(user)
    {
      return res.send(false)
    }
    return res.send(true)
  });
    
});

router.get('/validateMobile', function(req, res, next) {
  const mobile=req.query.mobile;
  
  AdminData.findOne({ "mobile": mobile }, function (err, data) {
 
    if(data)
    {
      return res.send(false)
    }
    return res.send(true)
  });
    
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
  AdminData.findOne({ "email": email }, function (err, user) {
    if(!user){
      return res.end("Email or password are not valid"); 
    }
    if(user.password !== password){
      return res.end("Email or password are not valid"); 
    }
    return res.send(`Welcome ${db_name}`)
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

});
module.exports = router;

