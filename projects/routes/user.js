var express = require('express');
var router = express.Router();
var Staind=require('../model/staind');
var UserModel=require('../model/user');
var CityModel=require('../model/city');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  CityModel.find(function(err, db_category_city) {
    if (err) {
        console.log("Error in Fetch Data " + err);
      } else {
                  console.log("aa",db_category_city);
                  
                   
                  Staind.find(function(err, db_category_state) {
                    if (err) {
                        console.log("Error in Fetch Data " + err);
                      } else {
                        //Print Data in Console
                       // console.log("mm",db_category_array);
                        //Render User Array in HTML Table
                        res.render('admin/user/add', { mydata:db_category_city,mycountry : db_category_state });
                        
                      }
              
                     
                  });  
                   
        
        
      }
  });
   
  });

  router.post('/add', function(req, res, next) {
    var myfile = req.files.files123;
  var myfilename = req.files.files123.name;
  myfile.mv('public/images/'+myfilename, function(err) {
    if (err)
    throw err;
    //res.send('File uploaded!');
    });
    
    console.log("File Send Success")
    const mybodydata = {
      user_name : req.body.uname,
    user_email : req.body.eml,
    user_pass : req.body.pass,
    user_dob : req.body.dob,
    user_gender : req.body.user_gen,
    user_image:myfilename,
    _statecat: req.body._statecat,
    _citycat: req.body._citycat
    }
   
    var data = UserModel(mybodydata);
  
    data.save(function(err){
      if(err){
        console.log("Error in Add Record" + err);
      }else{
        console.log("Record Added");
        res.send("Record Successfully Added")
      }
    })
    
  });
  router.get('/display', function (req, res, next) {

    UserModel.find(function(err, db_subcategory_array){
        
        console.log("aman",db_subcategory_array);
      
            if (err) res.json({message: 'There are no posts here.'});
      
             UserModel.find({})
             .populate('_citycat _statecat')
          
              .exec(function(err, db_subcategory_array) {
      
                 console.log("neema",db_subcategory_array);
             
                res.render("admin/user/display", { user_array: db_subcategory_array });
             })
          });
  
  });
  
  router.get('/delete/:id', function(req, res, next) {
    var deleteid = req.params.id;
    UserModel.findByIdAndDelete(deleteid,function(err,data){
      if(err)
      {
        console.log("Error in Delete " + err);
      }else{
        console.log("Record Deleted " + deleteid);
        res.redirect('/admin/user/display')
      }
    })
    
  });
  router.get('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    UserModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log(data);
        res.render('admin/user/edit',{mydata:data})
      }
    }).lean();
  
  });
module.exports = router;
