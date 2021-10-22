var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    stud_name : String,
    stud_mobile : Number,
    stud_age: Number,
    
    
});

module.exports = mongoose.model('stud',myschema);
