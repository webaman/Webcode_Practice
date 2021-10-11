var express = require('express');
var router = express.Router();
var CatModel=require('../model/category');
var SubcatModel=require('../model/subcategory');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {

  CatModel.find(function(err, db_category_array) {
      if (err) {
          console.log("Error in Fetch Data " + err);
        } else {
          //Print Data in Console
          console.log(db_category_array);
          //Render User Array in HTML Table
          res.render('admin/subcategory/add', { mydata : db_category_array });
          
        }
    });
//res.render('add-category');
});
router.post('/add', function(req, res, next) {
  console.log(req.body);
 
  //Create an Array 
  const mybodydata = {
    sub_category_name: req.body.sub_category_name,
    _category: req.body._category
   
    }
 
    console.log("Name is "  + req.body.sub_category_name);
    console.log("ID is "  + req.body._category);
 
var data = SubcatModel(mybodydata);
 
data.save(function(err) {
    if (err) {
       console.log("Error in Insert Record");
    } else {
        res.send("Data Added")
    }
})

});
  router.get('/display', function(req, res, next) {
    SubcatModel.find(function(err, db_subcategory_array){
      
      console.log(db_subcategory_array);

      if (err) res.json({message: 'There are no posts here.'});

      SubcatModel.find({})
      .populate('_category')
    
        .exec(function(err, db_subcategory_array) {

          console.log("neema",db_subcategory_array);
       
          res.render("admin/subcategory/display", { subcategory_array: db_subcategory_array });
        })
    });
    // res.render('admin/subcategory/display', { title: 'Express' });
  });
  router.get('/delete/:id', function(req, res) {
    SubcatModel.findByIdAndDelete(req.params.id, function(err, project) {
        if (err) {
  
          console.log("Error in Record Delete " + err);
            res.redirect('/displaye');
        } else {
  
          console.log(" Record Deleted ");
          res.redirect('/admin/subcategory/display');
        }
    });
  });
  router.get('/edit/:id', function(req, res) {

    var editid=req.params.id;
    CatModel.find(function(err,cdata){
    SubcatModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log("am",data);
        
          
            res.render('admin/subcategory/edit',{mydata:data,mydata1:cdata})
          }
        }).lean();
    });
  });
  router.post('/edit/:id', function(req, res) {

    console.log("Edit ID is"+ req.params.id);
  
    const mybodydata = {
      sub_category_name: req.body.sub_category_name,
      _category: req.body._category
    }
  
    SubcatModel.findByIdAndUpdate(req.params.id, mybodydata, function(err) {
        if (err) {
            console.log("Error in Record Update");
            res.redirect('/subcategory/display');
        } else {
          
            res.redirect('/admin/subcategory/display');
        }
    });
  });
  
module.exports = router;
