var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    firstName : String,
    lastName:String,
    email : String,
    password : String,
    gender:String,
    mobile:String,
    address:{
        line1:String,
        city:String,
        state:String,
        zip:Number

    },
    hobbies:[{
        type: String
    }],
});

module.exports = mongoose.model('admin-data',myschema);
    