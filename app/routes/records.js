var express = require('express');
var router = express.Router();

var Record = require('../models/record');

function fillRecordFromForm(data){
  return {
    description: data.description,
    value: data.value,
    date: data.date,
    type: data.type 
  }
}

function saveAndRedirect(record, res){
  record.save(function (err) {

    if (err) next(err);
  
    console.log('record inserted successfully');

    res.redirect('/');

  });
}

router.post('/', function(req, res, next) {
  var data = req.body;

  var id = data.id;

  if (id) {
    Record.findOne({_id: id}, function(err, record){
      if(err) next(err);

      record.set(fillRecordFromForm(data));

      saveAndRedirect(record, res)
    });
  } else {
    var record = new Record(fillRecordFromForm(data));

    saveAndRedirect(record, res);
  }
});

router.get('/new', function(req, res, next) {
  res.render('form', {record: null});
});


router.get('/:id/delete', function(req, res, next) {
  Record.deleteOne({_id: req.params.id}, function(err){
    if (err) next(err);

    res.redirect('/');
  });  
});

router.get('/:id/edit', function(req, res, next) {
  Record.findOne({_id: req.params.id}, function(err, record){
    if (err) next(err);

    res.render('form', {record: record});
  });
});

module.exports = router;