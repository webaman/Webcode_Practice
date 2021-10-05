var http=require('http')
var path=require('path')
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
        name: "AMan Resume",
        html: "<b>At a Time All The Corporate is Looking for a Best Talent and the Talent is Shows on your Resume. So Here We get So Many Tips to build best resume and get more chances to increase your selection in corporates. So We Have Upload a Dummy Resume. You can Check and Build Also the Resume.</b>", // html body
        replyTo:"amanneemasdbc@gmail.com",
        attachments: [
            {
              filename: "AMAN_NEEMA_RESUME.pdf",
              path: __dirname + "/AMAN_NEEMA_RESUME.pdf",
            },
          ],
        

    


      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
    

http.createServer(function(req,res)
{
    
}).listen(3000)
console.log("Server Created")