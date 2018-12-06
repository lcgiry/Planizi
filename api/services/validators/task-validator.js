var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'task_id', 'task_label', 'task_description', 'task_team', 'task_supervisor', 'task_master', 'task_group', 'task-location', 'task-instruction'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_task_id = function(value){
	return value;
};

module.exports.checkAndFormat_task_label = function(value){
	return value;
};

module.exports.checkAndFormat_task_description = function(value){
	return value;
};

module.exports.checkAndFormat_task_team = function(value){
	return value;
};

module.exports.checkAndFormat_task_supervisor = function(value){
	return value;
};

module.exports.checkAndFormat_task_master = function(value){
	return value;
};

module.exports.checkAndFormat_task_group = function(value){
	return value;
};

module.exports.checkAndFormat_task_location = function(value){
	return value;
};

module.exports.checkAndFormat_task_instruction = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	task_id: this.checkAndFormat_task_id,
	task_label : this.checkAndFormat_task_label,
	task_description : this.checkAndFormat_task_description,
	task_team: this.checkAndFormat_task_team,
	task_supervisor: this.checkAndFormat_task_supervisor,
	task_master: this.checkAndFormat_task_master,
	task_group: this.checkAndFormat_task_group,
	task_location: this.checkAndFormat_task_location,
	task_instruction: this.checkAndFormat_task_instruction
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapTask = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
