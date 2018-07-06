const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    // _id : {type: String ,required : false},
    userName: {type: String, required: true, max: 100},
    urlPhoto: {type: String, required: true},
    status:   {type: String, required:false},
});
/*
  userName:
  urlPhoto:
  status:
*/
// Export the model
module.exports = mongoose.model('Profile', ProfileSchema);
