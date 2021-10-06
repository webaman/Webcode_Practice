var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    cart_name : String,
    cart_price : Number,
    cart_image : String,
    cart_qty: Number,
});

module.exports = mongoose.model('cart',myschema);
