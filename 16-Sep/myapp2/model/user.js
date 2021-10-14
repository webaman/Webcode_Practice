var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    user_name : String,
    user_email : String,
    user_pass : String,
    user_dob : String,
    user_gender : String,
    _statecat:
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'staind'
        },
        _citycat:
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'city'
        },
    user_image : String,
    

    
});

module.exports = mongoose.model('user',myschema);
