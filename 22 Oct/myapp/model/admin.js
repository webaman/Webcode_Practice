var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    name : String,
    email : String,
    password : String,
    mobile:String,
    address:({
        line1:String,
        city:String,
        state:String,
        zip:String

    })
});

module.exports = mongoose.model('admin-data',myschema);
    