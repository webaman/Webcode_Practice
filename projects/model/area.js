var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var myschema = new Schema({
    area_name: String,
    _statecat:
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'staind'
        },
        _citycat:
        {
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'city'
        }
      
});

module.exports = mongoose.model('area', myschema);