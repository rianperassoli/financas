var mongoose = require('mongoose');

var recordSchema = mongoose.Schema({
	description: String,
	value: Number,
	date: Date,
	type: String
});

module.exports = mongoose.model('Record', recordSchema);