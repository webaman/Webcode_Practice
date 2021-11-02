var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    name : String,
    mobile:String,
    address:String
});

module.exports = mongoose.model('userapi',myschema);
