var express = require('express');
var router = express.Router();
var CatModel=require('../model/category');
var SubcatModel=require('../model/subcategory');
var ProdModel=require('../model/product');
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
        console.log("aman",db_category_array);
        SubcatModel.find(function(err, db_subcategory_array) {
          if (err) {
              console.log("Error in Fetch Data " + err);
            } else {
              //Print Data in Console
              console.log("mm",db_subcategory_array);
              //Render User Array in HTML Table
              res.render('admin/products/add', { mydata:db_category_array,mysubcat : db_subcategory_array });
              
            }
    
           
        });  
        //Render User Array in HTML Table
        
        
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
      prod_name : req.body.pnm,
      prod_details : req.body.pdt,
      prod_price:req.body.ppr,
      prod_qty:req.body.pqt,
      prod_image:myfilename,
      _procategory: req.body._procategory,
      _prosubcategory: req.body._prosubcategory
    }
    var data = ProdModel(mybodydata);
  
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

    ProdModel.find(function(err, db_subcategory_array){
        
        console.log("aman",db_subcategory_array);
      
            if (err) res.json({message: 'There are no posts here.'});
      
             ProdModel.find({})
             .populate('_procategory _prosubcategory')
          
              .exec(function(err, db_subcategory_array) {
      
                 console.log("neema",db_subcategory_array);
             
                res.render("admin/products/display", { user_array: db_subcategory_array });
             })
          });
  
  });
  router.get('/delete/:id', function(req, res, next) {
    var deleteid = req.params.id;
    ProdModel.findByIdAndDelete(deleteid,function(err,data){
      if(err)
      {
        console.log("Error in Delete " + err);
      }else{
        console.log("Record Deleted " + deleteid);
        res.redirect('/admin/products/display')
      }
    })
    
  });
  
  router.get('/edit/:id', function(req, res, next) {
    var editid = req.params.id;
    CatModel.find(function(err,cdata){
    SubcatModel.find(function(err,sdata){
    ProdModel.findById(editid,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log(data);
        res.render('admin/products/edit',{mydata:data , mysub :sdata,mycategory:cdata})
      }
    }).lean();
  
  });
  });
  });
  
  router.post('/edit/:id', function(req, res, next) {
  
    var myfile = req.files.file;
  var myfilename = req.files.file.name;
  myfile.mv('public/admin/'+myfilename, function(err) {
    if (err)
    throw err;
    //res.send('File uploaded!');
    });
  
    var editid = req.params.id;
    const prodata = {
      Product: req.body.productname,
      Productdetail: req.body.productdetail,
      Price:req.body.productprice,
      Image: myfilename,
      _category: req.body._category,
      _subcategory: req.body._subcategory
        }
    productModel.findByIdAndUpdate(editid,prodata,function(err,data){
      if(err){
        console.log("Error in Edit" + err)
      }else{
        console.log( "Record Updated" +  data);
  
    res.redirect('/admin/products/display');
  }
    }).lean();
  
  });
module.exports = router;
