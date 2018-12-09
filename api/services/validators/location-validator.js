var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'location_id', 'location_label', 'location_longitude', 'location_latitude', 'location_address', 'location_postcode', 'location_city', 'location_description'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_location_id = function(value){
	return value;
};

module.exports.checkAndFormat_location_label = function(value){
	return value;
};

module.exports.checkAndFormat_location_description = function(value){
	return value;
};

module.exports.checkAndFormat_location_longitude = function(value){
	return value;
};

module.exports.checkAndFormat_location_latitude = function(value){
	return value;
};

module.exports.checkAndFormat_location_address = function(value){
	return value;
};

module.exports.checkAndFormat_location_postcode = function(value){
	return value;
};

module.exports.checkAndFormat_location_city = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	location_id: this.checkAndFormat_location_id,
	location_label : this.checkAndFormat_location_label,
	location_description : this.checkAndFormat_location_description,
	location_longitude: this.checkAndFormat_location_longitude,
	location_latitude: this.checkAndFormat_location_latitude,
	location_postcode: this.checkAndFormat_location_postcode,
	location_address: this.checkAndFormat_location_address,
	location_city: this.checkAndFormat_location_city
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapLocation = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
