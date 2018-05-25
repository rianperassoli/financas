var express = require('express');
var router = express.Router();

var Record = require('../models/record');

/* GET users listing. */
router.post('/', function(req, res, next) {

  var data = req.body;

  var record = new Record({
    description: data.description,
    value: data.value,
    date: data.date,
    type: data.type 
  });


  record.save(function (err) {
    if (err) throw new Error(err);
  
    console.log('record inserted successfully');
  });
});

module.exports = router;