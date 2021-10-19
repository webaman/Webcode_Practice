var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();
const bodyParser = require('body-parser')
const { validateFirstName, validateAadhar, validatePAN, validateIMN, validatePassport, validateGST } = require('./validator')
const signupTemplet = require('./signup');
const { validateEmail } = require('./validator');
const { validatePassword } = require('./validator');


/* GET home page. */
router.get('/signup', (req, res) => {
  res.send(signupTemplet({}))
})




router.post(
  '/signup',
  [validateAadhar,validatePAN,validateIMN,validatePassport,validateGST,validatePassword],
  async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.send(signupTemplet({errors}))
    }
    
    res.send('Sign Up successfully')
});

// router.post('/form-process',[
//   check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10, max: 30 }),
//   check('name', 'Name length should be 10 to 20 characters').isLength({ min: 5, max: 20 }),
//   check('pass', 'Password length should be 8 to 10 characters').isLength({ min: 8, max: 10 })
// ], function(req, res, next) {
  
//   var errors = validationResult(req).array();
//   if (errors) {
//       req.session.errors = errors;
//       req.session.success = false;
//       res.redirect('/form');
      
//   } else {
//       req.session.success = true;
//       console.log(req.body);
//   }
// });
// router.get('/form', function (req, res) {
//   res.render('form', {
//       success: req.session.success,
//       errors: req.session.errors
//   });
//   req.session.errors = null;
// });


module.exports = router;
