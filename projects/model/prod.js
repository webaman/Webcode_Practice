var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    prod_name : String,
    
    prod_price : Number,
    _subcategory:
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'subcategory'
    }
});

module.exports = mongoose.model('Pro',myschema);
