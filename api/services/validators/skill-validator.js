var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'skill_label', 'skill_name', 'skill_name_fr', 'skill_description'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_skill_label = function(value){
	return value.replace(/ /g, "_");
};

module.exports.checkAndFormat_skill_name = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_skill_name_fr = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_skill_description = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	skill_label : this.checkAndFormat_skill_label,
	skill_name : this.checkAndFormat_skill_name,
	skill_name_fr : this.checkAndFormat_skill_name_fr,
	skill_description : this.checkAndFormat_skill_description,
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapSkill = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};