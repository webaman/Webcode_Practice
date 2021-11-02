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
  let hobby=
     {
       cricket:"Cricket",
       dancing:"Dancing",
       webseries:"Webseries",
       football:"Football"
     }
  res.render('admin/signup', { myhobby:hobby });
});
router.post('/signup',[
  check('firstname', 'Name length should be 2 to 20 characters').isLength({ min: 2, max: 20 }).isAlpha('en-US', {ignore: '\s'}).withMessage('Name Must be Alphabetic'),
  check('lastname', 'Name length should be 2 to 20 characters').isLength({ min: 2, max: 20 }).isAlpha('en-US', {ignore: '\s'}).withMessage('Name Must be Alphabetic'),
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
        firstName : req.body.firstname,
        lastName: req.body.lastname,
        email : req.body.email,
        password:pass,
        gender:req.body.gender,
        mobile:req.body.mobile,
        hobbies:req.body.hobbies
        
      }
      const data = AdminData(mybodydata);
    
      data.save(function(err){
        if(err){
          console.log("Error in Add Record" + err);
        }else{
          
          res.redirect('/login')
        }
      })
      
    }
});

router.get('/login', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
});
router.post('/login', async function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else
    {
      
 

  try 
  { 
    var password=req.body.password

    console.log(req.body);
    const user = await AdminData.findOne({
      $or: [
        { 'email': req.body.emailorphone },
        { 'mobile': req.body.emailorphone }
      ]
    })
    var encryptpassword = forge.md.sha512.create().update(password).digest().toHex();  
    if(!user){
      return res.end("Email or password are not valid"); 
    }
    if(user.password !== encryptpassword){
      
      return res.end("Email or password are not valid"); 
    }
   
    req.session.email = user.email;
    req.session.userid=user._id
    console.log("nnmm",req.session.userid)
    res.redirect('/dashboard')
  }
  catch(err)
  {
    console.log("error hai")
  res.send(err)
  }
}
});
router.get('/validate/:type', function(req, res, next) {
  let condition={

    "email":req.query.email
  }

  if(req.params.type==='mobile')
  {
    condition={
     "mobile":req.query.mobile
    }
  }
 
  AdminData.findOne(condition, function (err, user) {
    if(user)
    {
      return res.send(false)
    }
    return res.send(true)
  });
    
});

// router.get('/validateMobile', function(req, res, next) {
//   const mobile=req.query.mobile;
  
//   AdminData.findOne({ "mobile": mobile }, function (err, data) {
 
//     if(data)
//     {
//       return res.send(false)
//     }
//     return res.send(true)
//   });
    
// });

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

router.get('/dashboard', function(req, res, next) {

  var myemail=req.session.email
  var myid=req.session.userid
  console.log('req.session', req.session.userid);

  //Auth
  if (!myemail) {
    console.log("Email Session is Set");
    return res.redirect('/login')
  }
  return res.render('admin/dashboard', {myid:myid});
});

// router.get('/profile/:id', function(req, res, next) {
//   var editid = req.params.id;
//   AdminData.findById(editid,function(err,data){
//     if(err){
//       console.log("Error in Edit" + err)
//     }else{
//       console.log("Aman",data);
//       res.render('admin/profile',{mydata:data})
//     }
//   }).lean();

// });
router.get('/profile/:id', async function(req, res, next) {
  const editid = req.params.id;
  try{
    
  const data =  await AdminData.findById(editid)

      const hobby=
      {
        cricket:"Cricket",
        dancing:"Dancing",
        webseries:"Webseries",
        football:"Football"
      }
     
     return res.render('admin/profile',{userdata:data,hobby:hobby})
    
  }
  catch(err)
  {
    console.log("error hai")
    res.send(err)
  }
});
router.post('/profile/:id', async function(req, res, next) {
  
  const editid = req.params.id;
  const mybodydata = {
    firstName : req.body.firstname,
    lastName: req.body.lastname,
    email : req.body.email,
    mobile:req.body.mobile,
    gender:req.body.gender,
    'address.line1':req.body.address,
    'address.city':req.body.city,
    'address.state':req.body.state,
    'address.zip':req.body.zip,
    hobbies:req.body.hobbies
  }
  await AdminData.findByIdAndUpdate(editid,mybodydata).then((editid,data,err) => {
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log( "Record Updated" +  data);

    return res.redirect('/dashboard')
    }
  });
  

});
router.get('/logout', function (req, res) {

  req.session.destroy();
  res.redirect('/login');
});


module.exports = router;

