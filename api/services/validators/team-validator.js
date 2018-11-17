var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'team_label', 'team_name', 'team_name_fr', 'team_description'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_team_label = function(value){
	return value.replace(/ /g, "_");
};

module.exports.checkAndFormat_team_name = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_team_name_fr = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_team_description = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	team_label : this.checkAndFormat_team_label,
	team_name : this.checkAndFormat_team_name,
	team_name_fr : this.checkAndFormat_team_name_fr,
	team_description : this.checkAndFormat_team_description,
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapTeam = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
