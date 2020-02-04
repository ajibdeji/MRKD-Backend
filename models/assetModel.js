var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var assetSchema = new Schema({
	'name' : String,
	'description' : String,
	'category' : String,
	'value' : Number,
	'tokenId' : String
});

module.exports = mongoose.model('asset', assetSchema);
