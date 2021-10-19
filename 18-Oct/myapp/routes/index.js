var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/form-process',[
  check('email', 'Email length should be 10 to 30 characters').isEmail().isLength({ min: 10 }),
  check('name', 'Name length should be 10 to 20 characters').isLength({ min: 5, max: 20 }),
  check('pass', 'Password length should be 8 to 10 characters').isLength({ min: 8, max: 10 })
], function(req, res, next) {
  
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else
    {
      res.send("Data Inserted Success")
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
