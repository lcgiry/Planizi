var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'user_mail', 'user_name', 'user_surname', 'user_nickname', 'user_gender', 'user_phone', 'user_birthdate', 'user_description', 'user_experience', 'user_incapacity', 'user_teeshirt_size', 'user_trust_point', 'user_involvement_point',
	'user_happiness_point', 'user_rights', 'user_role', 'user_identity_card_file', 'user_social_security_card_file', 'user_social_security_card_number', 'user_driver_licence_file', 'user_cv_file', 'user_last_login'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_user_mail = function(value){
	return value;
};

module.exports.checkAndFormat_user_name = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_user_surname = function(value){
	return format.formatToSentenceCase(value);
};

module.exports.checkAndFormat_user_nickname = function(value){
	return value;
};

module.exports.checkAndFormat_user_gender = function(value){
	return value;
};

module.exports.checkAndFormat_user_phone = function(value){
	return value;
};

module.exports.checkAndFormat_user_birthdate = function(value){
	return value; 
};

module.exports.checkAndFormat_user_description = function(value){
	return value;
};

module.exports.checkAndFormat_user_experience = function(value){
	return value;
};

module.exports.checkAndFormat_user_incapacity = function(value){
	return value;
};

module.exports.checkAndFormat_user_teeshirt_size = function(value){
	return value.toUpperCase();
};

module.exports.checkAndFormat_user_trust_point = function(value){
	return value;
};

module.exports.checkAndFormat_user_involvement_point = function(value){
	return value;
};

module.exports.checkAndFormat_user_happiness_point = function(value){
	return value;
};

module.exports.checkAndFormat_user_rights = function(value){
	return value;
};

module.exports.checkAndFormat_user_role = function(value){
	return value;
};

module.exports.checkAndFormat_user_indentity_card_file = function(value){
	return value;
};

module.exports.checkAndFormat_user_social_security_card_file = function(value){
	return value;
};

module.exports.checkAndFormat_user_social_security_card_number = function(value){
	return value;
};

module.exports.checkAndFormat_user_driver_licence_file = function(value){
	return value;
};

module.exports.checkAndFormat_user_cv_file = function(value){
	return value;
};

module.exports.checkAndFormat_user_last_login = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	user_mail : this.checkAndFormat_user_mail,
	user_name : this.checkAndFormat_user_name,
	user_surname : this.checkAndFormat_user_surname,
	user_nickname : this.checkAndFormat_user_nickname,
	user_gender : this.checkAndFormat_user_gender,
	user_phone : this.checkAndFormat_user_phone,
	user_birthdate : this.checkAndFormat_user_birthdate,
	user_description : this.checkAndFormat_user_description,
	user_experience : this.checkAndFormat_user_experience,
	user_incapacity : this.checkAndFormat_user_incapacity,
	user_teeshirt_size : this.checkAndFormat_user_teeshirt_size,
	user_trust_point : this.checkAndFormat_user_trust_point,
	user_involvement_point : this.checkAndFormat_user_involvement_point,
	user_happiness_point : this.checkAndFormat_user_happiness_point,
	user_rights : this.checkAndFormat_user_rights,
	user_role : this.checkAndFormat_user_role,
	user_identity_card_file : this.checkAndFormat_user_indentity_card_file,
	user_social_security_card_file : this.checkAndFormat_user_social_security_card_file,
	user_social_security_card_number : this.checkAndFormat_user_social_security_card_number,
	user_driver_licence_file : this.checkAndFormat_user_driver_licence_file,
	user_cv_file : this.checkAndFormat_user_cv_file,
	user_last_login : this.checkAndFormat_user_last_login
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapUser = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
