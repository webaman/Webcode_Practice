var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_fname: String,
    user_lname: String,
    user_gender: String,
    user_dob: String,
    user_time: String,
    user_city: String,
    user_state: String,
    user_text: String,
    user_hobbies:[{
        type: String
    }],
    user_email: String,
    user_password: String,
    user_joindate : {type: Date, default: Date.now},

});

module.exports = mongoose.model('userpanel', myschema);