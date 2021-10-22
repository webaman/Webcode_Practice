var express = require('express');
var router = express.Router();
var CatModel=require('../model/category');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
    res.render('admin/category/add', { title: 'Express' });
  });
  router.post('/add', function(req, res, next) {
  
    const mybodydata = {
      cat_name : req.body.cnm,
      
    }
    var data = CatModel(mybodydata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        res.send("Record Successfully Added")
      }
    })
    
  });
  router.get('/display', function(req, res, next) {
    CatModel.find(function(err,data){
      if(err){
        console.log("Error in Fetch Data" + err);
      }else{
        console.log("Record Data is " + data);
        res.render('admin/category/display',{mydata:data});
      }
    }).lean();
  });
  router.get('/delete/:id', function(req, res, next) {
    var deleteid = req.params.id;
    CatModel.findByIdAndDelete(deleteid,function(err,data){
      if(err)
      {
        console.log("Error in Delete " + err);
      }else{
        console.log("Record Deleted " + deleteid);
        res.redirect('/admin/category/display');
      }
    })
    
  });
  
  router.get('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    CatModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log(data);
        res.render('admin/category/edit',{mydata:data})
      }
    }).lean();
  
  });
  router.post('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    const mybodydata = {
      cat_name : req.body.cnm,
    }
  
    CatModel.findByIdAndUpdate(editid,mybodydata,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log( "Record Updated" +  data);
  
        res.redirect('/admin/category/display');
      }
    }).lean();
  
  });
  
module.exports = router;
