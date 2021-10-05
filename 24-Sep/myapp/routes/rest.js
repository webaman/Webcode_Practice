var express = require('express');
var router = express.Router();

var RestModel=require('../model/restapi')

router.get('/get-users-api',function(req,res,next){
  RestModel.find({},function(err,mydata){
    if(err){
      res.send(JSON.stringify({"flag":0,"message":"Error","err":err}));
    }else{
      res.send(JSON.stringify({"flag":1,"message":"data listing","data":mydata}));
    }
  });
});
/Get single data by id */
router.get('/get-users-details-api/:id',function(req,res,next){
  RestModel.findById(req.params.id,function(err,mydata){
    if(err){
      res.send(JSON.stringify({"flag":0,"message":"Error","err":err}));
    }else{
      res.send(JSON.stringify({"flag":1,"message":"data listing","data":mydata}));
    }
  });
});

router.get('/add-users-api', function(req, res, next) {
  res.render("restapi/add-users-api");
});
//add all data
router.post('/add-users-api',function(req,res,next){
  console.log(req.body);
  const mybodydata ={
    user_name:req.body.nme,
    user_email:req.body.eml
  }
  var data =RestModel(mybodydata);
  data.save(function(err){
    if(err){
      res.send(JSON.stringify({"flag":0,"message":"Error in api ","err":err}));
    }else{
      res.send(JSON.stringify({"flag":1,"message":"record added"}));
    }
  })
});

//delete data  by id
router.delete('/get-users-delete-api/:id',function(req,res,next){
  RestModel.remove({
    _id: req.params.id
  }, function (err, blog) {
    if (err) return res.send(err);
    res.json({ message: 'Blog Post Deleted'});
  });

});
router.get('/get-update-user/:id', function(req, res, next) {
  var editid = req.params.id;
  RestModel.findById(editid,function(err,data){
    if(err){
      console.log("Error in Edit" + err)
    }else{
      console.log(data);
      res.render('edit',{mydata:data})
    }
  }).lean();

});
router.put('/get-update-user/:id', function(req, res) {
	// create mongose method to update a existing record into collection
	let id = req.params.id;
	var data = {
		user_name : req.body.nme,
		user_email: req.body.eml
	}

	// save the user
	RestModel.findByIdAndUpdate(id, data, function(err, data) {
	if (err) throw err;

	res.send('Successfully! updated');
	});
});

module.exports = router;
