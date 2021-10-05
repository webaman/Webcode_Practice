var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/thank', function(req, res, next) {
  res.render('Thankyou', { title: 'Express' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/partials', function(req, res, next) {
  res.render('partials');
});
router.get('/demo/:id/:status', (req, res) => {
  res.send(req.params.id +"  "+ req.params.status)
 })
router.get('/demo/', function(req, res, next) {
  res.send("number "+req.query.number);
 
});
router.post('/signup', function(req, res, next) {



  
  "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sharmarohanrs8@gmail.com", // generated ethereal user
          pass: "rohan@123", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aman Neema"', // sender address
    to: "amanam1109@gmail.com", // list of receivers
    subject: "Tips to Get More Impressive Resume", // Subject line
    text: "Hello world?", // plain text body
    
    html: "<table border=1 style=border-collapse:collapse; width=50%><tr><td><b>Firstname:</b></td><td>"+req.body.fnm+"</td></tr>" + "<tr><td><b>Lastname:</b></td><td>"+req.body.lnm+"</td></tr>" + "<tr><td><b>Email:</b></td><td>"+req.body.em+"</td></tr>" + "<tr><td><b>Password:</b></td><td>"+req.body.pass+"</td></tr>" + "<tr><td><b>City:</b></td><td>"+req.body.city+"</td></tr>" + "<tr><td><b>State:</b></td><td>"+req.body.state+"</td></tr>" + "</table>", // html body
    replyTo:"amanneemasdbc@gmail.com",
    
    




  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
res.redirect('/thank')
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post('/form', function(req, res, next) {
  

  "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sharmarohanrs8@gmail.com", // generated ethereal user
          pass: "rohan@123", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aman Neema"', // sender address
    to: req.body.toname, // list of receivers
    subject: req.body.subname, // Subject line
    text: "Hello world?", // plain text body
    name: "AMan Resume",
    html: req.body.bname, // html body
    replyTo:"amanneemasdbc@gmail.com",
   
    




  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

res.redirect('/thank')
});
module.exports = router;
