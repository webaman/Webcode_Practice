var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    admin_name : String,
    admin_user : String,
    admin_pass : String,
    admin_cpass : String,
});

module.exports = mongoose.model('admin',myschema);
