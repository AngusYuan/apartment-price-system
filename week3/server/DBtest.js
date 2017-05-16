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

var fakedata = [{ date: '2017-01-07', count: 1 },
{ date: '2017-01-02', count: 2},
{ date: '2017-01-03', count: 1 },
{ date: '2017-01-04', count: 3},
{ date: '2017-01-05', count: 1 },
{ date: '2017-01-06', count: 2 },
{ date: '2017-01-08', count: 1 },
{ date: '2017-01-09', count: 3 },
{ date: '2017-01-10', count: 2 },
{ date: '2017-01-11', count: 3 },
{ date: '2017-01-13', count: 1 },
{ date: '2017-01-14', count: 2 },
{ date: '2017-01-15', count: 1 },
{ date: '2017-01-16', count: 1 },
{ date: '2017-01-18', count: 2 },
{ date: '2017-01-20', count: 3 },
{ date: '2017-01-21', count: 1 },
{ date: '2017-01-25', count: 3 },
{ date: '2017-01-28', count: 1 },
{ date: '2017-01-29', count: 1 },
{ date: '2017-02-01', count: 2 },
{ date: '2017-02-03', count: 1 },
{ date: '2017-02-04', count: 1 },
{ date: '2017-03-01', count: 3 },
{ date: '2017-12-21', count: 1 },
{ date: '2017-12-24', count: 1 },
{ date: '2017-12-10', count: 2 },
{ date: '2017-12-05', count: 1 },
{ date: '2017-03-01', count: 1 },
{ date: '2017-02-11', count: 3 },
{ date: '2017-02-18', count: 1 },
{ date: '2017-03-04', count: 2 }]

for (var i=0;i<fakedata.length;i++)
{
  var data = new DataModel(fakedata[i]);

  data.save(function (err) {
    if (err) {
      console.log('save error:' + err);
    }

    console.log('save sucess');
  })
}
