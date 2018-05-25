var mongoose = require('mongoose');

var dbuser = "root";
var dbpassword = "root";

module.exports.connectDatabase = function(){
	mongoose.connect('mongodb://' + dbuser + ':' + dbpassword +'@ds135540.mlab.com:35540/financas');

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error: '));

	db.once('open', function(){
		console.log('connection successful');
	});
}