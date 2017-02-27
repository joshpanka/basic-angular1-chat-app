var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var msgSchema = new Schema({
  text: String,
  created_at: Date,
  updated_at: Date
});

var Msg = mongoose.model('Msg', msgSchema);

module.exports = Msg;