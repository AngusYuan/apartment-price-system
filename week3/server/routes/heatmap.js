var express = require('express');
var router = express.Router();
var DataModel = require("../model/datamodel");

var getdata = function () {
  return new Promise((resolve,reject) => {
  DataModel.find({}, function (err, heatmap) {
      if (err) {
        reject(err);
      } else {
        resolve(heatmap);
      }
    });
  });
}

/* GET heatmap listing. */
router.get('/', function(req, res, next) {
  getdata().then(heatmap => res.json(heatmap));
});

module.exports = router;
