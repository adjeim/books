var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		// type: Schema.ObjectID,
		// ref: 'Author',
		required: true
	},
	published: {
		type: Date,
	},
	added: {
		type: Date,
		default: Date.now
	},
	keywords: Array,
	genre: String

});

module.exports = mongoose.model('Book', BookSchema);