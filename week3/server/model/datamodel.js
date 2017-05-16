var mongoose = require("mongoose");
var dataSchema = mongoose.Schema({
  date: Date,
  count: Number
});
var DataModel = mongoose.model('DataModel', dataSchema);

module.exports = DataModel;
