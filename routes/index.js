var express = require('express');
var router = express.Router();

var Record = require('../models/record')

/* GET home page. */
router.get('/', function(req, res, next) {

  Record.find({}, function(err, records){
  	if (err) throw new Error(err); 	

  	res.render('index', {records: records});
  });	  
});




module.exports = router;
