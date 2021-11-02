var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const UserModel=require('../model/userapi');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Express' });
});
router.post('/form', function(req, res, next) {
  const mybodydata = {
    name : req.body.name,
    mobile:req.body.mobile,
    address:req.body.address
    
  }
  const data = UserModel(mybodydata);

  data.save(function(err){
    if(err){
      console.log("Error in Add Record" + err);
    }else{
      
     res.send("Data inserted Successfully")
    }
  })

  
});
router.get('/display',function(req,res,next){
  UserModel.find({},function(err,mydata){
    if(err){
      res.send(JSON.stringify({"flag":0,"message":"Error","err":err}));
    }else{
      res.send(JSON.stringify({"data":mydata}));
    }
  });
});
router.get('/show', async function(req, res, next) {
  
  const response = await fetch('http://127.0.0.1:3000/display');
const body = await response.json();
console.log("aman",body)
return res.render('show',{mydata:body})

});

router.get('/show1', async function(req, res, next) {
  
  const response = await fetch('https://fakestoreapi.com/products/');
const body = await response.json();
console.log("aman",body)
return res.render('show1',{mydata:body})

});

module.exports = router;
