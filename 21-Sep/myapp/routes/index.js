var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/disdata', function(req, res, next) {
  res.render('disdata', { mymsg: '' });
});
router.get('/fileupload', function(req, res, next) {
  res.render('fileupload');
});

router.post('/formprocess', function(req, res, next) {

  var myfile = req.files.files1;
var myfilename = req.files.files1.name;
var myfilesize = req.files.files1.size;
var sizes=myfilesize/1000;
var myfilemime = req.files.files1.mimetype;

if(sizes<=200)
{

res.send("File Size is Too Smaller")
  }
  else  
  if((myfilemime==='image/gif' || myfilemime==='image/jpeg'|| myfilemime==='image/png'))
  {
    myfile.mv('public/images/'+myfilename, function(err) {
      if (err)
      throw err;
      //res.send('File uploaded!');
      });
      
      res.send("File Send Success")
  }
  else
  {
    res.send("File Does not Exist")
  }  


});
router.get('/disdata1', function(req, res, next) {
  res.render('disdata1', { my: [
    {name:'Aman'},
    {name:'Neema'}
  ] });
});
module.exports = router;
