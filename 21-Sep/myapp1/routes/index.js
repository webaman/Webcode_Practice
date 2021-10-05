var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')




  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/multi', function(req, res, next) {
  res.render('multi', { title: 'Express' });
});
router.get('/multi1', function(req, res, next) {
  res.render('multi1', { title: 'Express' });
});
router.post('/upload', upload.single('blogimage'), function(req, res, next) {
  var fileinfo = req.file.filename;
  
  res.send(fileinfo);
})
router.post('/uploads', upload.array('blogimage', 5), function(req, res, next) {
  var fileinfo = req.files;
  
  
  res.send(fileinfo);
})



module.exports = router;
