var express = require('express');
var router = express.Router();
var Staind=require('../model/staind');
var CityModel=require('../model/city');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

  router.get('/add', function(req, res, next) {

    Staind.find(function(err, db_category_array) {
        if (err) {
            console.log("Error in Fetch Data " + err);
          } else {
            //Print Data in Console
            console.log(db_category_array);
            //Render User Array in HTML Table
            res.render('admin/city/add', { mydata : db_category_array });
            
          }
      });
  //res.render('add-category');
  });
  router.post('/add', function(req, res, next) {
    console.log(req.body);
   
    //Create an Array 
    const mybodydata = {
      city_name: req.body.citynm,
      _statecat: req.body._statecat
     
      }
   
      console.log("Name is "  + req.body.ste);
      console.log("ID is "  + req.body._category);
   
  var data = CityModel(mybodydata);
   
  data.save(function(err) {
      if (err) {
         console.log("Error in Insert Record");
      } else {
          res.send("data inserted")
      }
  })
  
  });
  router.get('/display', function(req, res, next) {

    CityModel.find(function(err, db_subcategory_array){
        
        console.log(db_subcategory_array);
  
        if (err) res.json({message: 'There are no posts here.'});
  
        CityModel.find({})
        .populate('_statecat')
      
          .exec(function(err, db_subcategory_array) {
  
            console.log(db_subcategory_array);
         
            res.render("admin/city/display", { subcategory_array: db_subcategory_array });
          })
      });
   
  });
  router.get('/delete/:id', function(req, res) {
    CityModel.findByIdAndDelete(req.params.id, function(err, project) {
        if (err) {
  
          console.log("Error in Record Delete " + err);
            res.redirect('/displaye');
        } else {
  
          console.log(" Record Deleted ");
          res.redirect('/admin/city/display');
        }
    });
  });
  router.get('/edit', function(req, res, next) {
    res.render('admin/city/edit', { title: 'Express' });
  });
module.exports = router;
