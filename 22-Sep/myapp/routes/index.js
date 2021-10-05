var express = require('express');
var router = express.Router();
var qs = require('querystring');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/color', function(req, res, next) {
  res.render('color', { title: 'Express' });
});
router.post('/color', function(req, res, next) {
 var b=req.body.nm1;
 res.cookie('colors',b,{maxAge:100000});
res.redirect('/homepage')

 
});
router.get('/homepage', function(req, res, next) {

  var cc=req.cookies.colors
  res.render('homepage', { mycol: cc });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.get('/counter', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    // res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})

router.get('/count', function(req, res, next) {
  var counts=req.cookies.counts
  if (counts) {
    res.cookie('counts',+counts +1,{maxAge:100000});
    
    res.send(`Value:${counts}`)
    
    
    res.end()
  } else {
    res.cookie('counts',1,{maxAge:100000});

    res.end('welcome to the session demo. refresh!')
  }
})

router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err)
  {
    res.redirect('/login')
  })
});
router.post('/login-pro', function(req, res, next) {
  var a=req.body.nm;

  req.session.user=a;

  res.cookie('username',a);

  res.redirect('/home')
});





router.get('/home', function(req, res, next) {
  
  if(req.session.user)
  {
    res.render('home', { mymsg: req.session.user });
    ;
    console.log(req.cookies.username)
  }
  else
  {
    res.send("Login Required")
  }
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
    attachments: [
      {
          filename: req.body.filess,
          path: __dirname+"/" +req.body.filess ,
      }
  ]






  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

res.send("File Send Successfully")
});
module.exports = router;
