var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'role_label', 'role_name', 'role_name_fr', 'role_description'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_role_label = function(value){
	return value.replace(/ /g, "_");
};

module.exports.checkAndFormat_role_name = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_role_name_fr = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_role_description = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	role_label : this.checkAndFormat_role_label,
	role_name : this.checkAndFormat_role_name,
	role_name_fr : this.checkAndFormat_role_name_fr,
	role_description : this.checkAndFormat_role_description,
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapRole = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
