var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name:String,
    chat_msg : String,
    chat_date : {type: Date, default: Date.now},
});

module.exports = mongoose.model('mychat',myschema);