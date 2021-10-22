var express = require('express');
var router = express.Router();
var Staind=require('../model/staind');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
    res.render('admin/state/add', { title: 'Express' });
  });
  router.post('/add', function(req, res, next) {
  
    const mybodydata = {
      st_name : req.body.snm,
      
    }
    var data = Staind(mybodydata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        res.send("data inserted")
      }
    })
    
  });
  router.get('/display', function(req, res, next) {
    Staind.find(function(err,data){
      if(err){
        console.log("Error in Fetch Data" + err);
      }else{
        console.log("Record Data is " + data);
        res.render('admin/state/display',{mydata:data});
      }
    }).lean();
  });
  router.get('/delete/:id', function(req, res, next) {
    var deleteid = req.params.id;
    Staind.findByIdAndDelete(deleteid,function(err,data){
      if(err)
      {
        console.log("Error in Delete " + err);
      }else{
        console.log("Record Deleted " + deleteid);
        res.redirect('/admin/state/display');
      }
    })
    
  });
  router.get('/edit', function(req, res, next) {
    res.render('admin/state/edit', { title: 'Express' });
  });
module.exports = router;
