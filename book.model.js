var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: Schema.ObjectID,
		ref: 'Author',
		required: true
	},
	published: {
		type: Date,
	},
	added: {
		type: Date,
		default: Date.now
	},
	keywords: Array

});

module.exports = mongoose.model('Book', BookSchema);