var mongoose = require("mongoose");

var db = mongoose.connect("mongodb://angus:angus@ds127801.mlab.com:27801/capstone");

db.connection.on("error", function (error) {
  console.log("fail：" + error);
});

db.connection.on("open", function () {
  console.log("success");
});

var dataSchema = mongoose.Schema({
  date: String,
  count: Number
});
var DataModel = mongoose.model('DataModel', dataSchema);

var data = new DataModel({ date: '2017-01-01', count: 1 });

data.save(function (err) {
  if (err) {
    console.log('save error:' + err);
  }

  console.log('save sucess');
})
