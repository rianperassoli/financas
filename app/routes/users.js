var express = require('express');
var router = express.Router();

var Record = require('../models/record');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
});

module.exports = router;


/*
  var record = new Record({
  	description: 'teste1',
  	value: 120,
  	date: new Date(),
  	type: 'C' 
  });


  record.save(function (err) {
    if (err) throw new Error(err);
  
  	res.send('respond with a resource');
  });
*/

/*
  Record.find({
  	type: 'C'
  }, function(err, records){
  	if (err) throw new Error(err);

  	var html = '<table>';

  	console.log(records);

  	records.forEach(function(record){
  		console.log(record);

  		html += '<tr><td>' + record.description + '</td></tr>';
  	})

  	html += '</table>';

  	res.send(html);
  });
*/
