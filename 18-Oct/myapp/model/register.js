var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    name : String,
    email : String,
    password : String,
    age:String ,
    mobile:String,
    address:String
});

module.exports = mongoose.model('register-data',myschema);
