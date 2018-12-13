var format = require('../format');
var moment = require('moment');


//------------------------ List all fields of the table -----------------------------
let fields = ['shift_subset_id','shift_subset_start', 'shift_subset_end'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_shift_subset_id = function(value){
	return value;
};

module.exports.checkAndFormat_shift_subset_start = function(value){
	var date = moment(value);
	var remainder = (date.minute() % 15);
	if(remainder == 15){
		remainder=0;
	}
	var roundedDate = date.subtract(remainder, "minutes").second(0).toDate()//.format("YYYY-MM-DD - HH:mm");
	return roundedDate;
};

module.exports.checkAndFormat_shift_subset_end = function(value){
	var date = moment(value);
	var remainder = 15 - (date.minute() % 15);
	if(remainder == 15){
		remainder=0;
	}
	var roundedDate = date.add(remainder, "minutes").second(0).toDate()//.format("YYYY-MM-DD - HH:mm");
	return roundedDate;
};

module.exports.checkSubsetRange = function(start, end){

};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	shift_subset_id : this.checkAndFormat_shift_subset_id,
	shift_subset_start: this.checkAndFormat_shift_subset_start,
	shift_subset_end: this.checkAndFormat_shift_subset_end
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapShiftSubset = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
