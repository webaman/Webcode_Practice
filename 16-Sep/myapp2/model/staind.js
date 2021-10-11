var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    st_name : String,
});

module.exports = mongoose.model('staind',myschema);
