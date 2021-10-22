var express = require('express');
var router = express.Router();
var CityModel=require('../model/city');
var AreaModel=require('../model/area');
var Staind=require('../model/staind');
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
                        res.render('admin/area/add', { mydata:db_category_city,mycountry : db_category_state });
                        
                      }
              
                     
                  });  
                   
        
        
      }
  });
  
 
//res.render('add-category');
});
router.post('/add', function(req, res, next) {
  console.log(req.body);
 
  //Create an Array 
  const mybodydata = {
    area_name: req.body.areanm,
    _statecat: req.body._statecat,
    _citycat:req.body._citycat
   
    }
 
    console.log("Name is "  + req.body.cty);
    console.log("ID is "  + req.body._category);
    console.log("City Cat is "  + req.body._states);
var data = AreaModel(mybodydata);
 
data.save(function(err) {
    if (err) {
       console.log("Error in Insert Record");
    } else {
        res.send("data inserted")
    }
})

});
router.get('/display', function(req, res, next) {

  AreaModel.find(function(err, db_subcategory_array){
      
//      console.log("aman",db_subcategory_array);

      if (err) res.json({message: 'There are no posts here.'});

      AreaModel.find({})
       .populate('_citycat _statecat')
    
        .exec(function(err, db_subcategory_array) {

           console.log("neema",db_subcategory_array);
       
          res.render("admin/area/display", { subcategory_array: db_subcategory_array });
       })
    });
 
});
router.get('/delete/:id', function(req, res, next) {
  var deleteid = req.params.id;
  AreaModel.findByIdAndDelete(deleteid,function(err,data){
    if(err)
    {
      console.log("Error in Delete " + err);
    }else{
      console.log("Record Deleted " + deleteid);
      res.redirect('/admin/area/display')
    }
  })
  
});
  router.get('/edit', function(req, res, next) {
    res.render('admin/area/edit', { title: 'Express' });
  });
module.exports = router;
