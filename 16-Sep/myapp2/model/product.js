var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    prod_name : String,
    prod_details : String,
    prod_price : Number,
    prod_image : String,
    prod_qty: Number,
    _procategory:
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    },
    _prosubcategory:
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'subcategory'
    }

    
});

module.exports = mongoose.model('Products',myschema);
