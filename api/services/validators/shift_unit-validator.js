var format = require('../format');
var moment = require('moment');


//------------------------ List all fields of the table -----------------------------
let fields = ['shift_unit_start', 'shift_unit_end', 'shift_unit_point'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_shift_unit_id = function(value){
	return value;
};

module.exports.checkAndFormat_shift_unit_start = function(value){
	var date = moment(value);
	var remainder = (date.minute() % 15);
	if(remainder == 15){
		remainder=0;
	}
	var roundedDate = date.subtract(remainder, "minutes").second(0).toDate()//.format("YYYY-MM-DD - HH:mm");
	return roundedDate;
};

module.exports.checkAndFormat_shift_unit_end = function(value){
	var date = moment(value);
	var roundedDate = date.second(0).toDate()//.format("YYYY-MM-DD - HH:mm");
	return roundedDate;
};

module.exports.checkAndFormat_shift_unit_point = function(value){
	return value;
};



//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	shift_unit_id : this.checkAndFormat_shift_unit_id,
	shift_unit_start : this.checkAndFormat_shift_unit_start,
	shift_unit_end : this.checkAndFormat_shift_unit_end,
	shift_unit_point : this.checkAndFormat_shift_unit_point
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapShiftUnit = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)) {
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	var start = checkAndFormatCallable['shift_unit_start'](req.body.shift_unit_start);
	var end = moment(start).add(15, "minutes").second(0).toDate();
	result['shift_unit_start'] = start;
	result['shift_unit_end'] = end;

	return result;

};
