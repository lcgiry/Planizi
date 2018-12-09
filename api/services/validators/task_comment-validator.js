var format = require('../format');


//------------------------ List all fields of the table -----------------------------
let fields = [	'task_comment_id', 'task_comment_owner', 'task_comment_content', 'task_comment_date', 'task_comment_task'];


//------------------------ Define all methods that can check and format each field -----------------------------
module.exports.checkAndFormat_task_comment_id = function(value){
	return value;
};

module.exports.checkAndFormat_task_comment_owner = function(value){
	return value;
};

module.exports.checkAndFormat_task_comment_date = function(value){
	return Date.now();
};

module.exports.checkAndFormat_task_comment_content = function(value){
	return value;
};

module.exports.checkAndFormat_task_comment_task = function(value){
	return value;
};


//------------------------ Make all previous methods callable -----------------------------
var checkAndFormatCallable = {
	task_comment_id: this.checkAndFormat_task_comment_id,
	task_comment_content: this.checkAndFormat_task_comment_content,
	task_comment_date: this.checkAndFormat_task_comment_date,
	task_comment_owner: this.checkAndFormat_task_comment_owner,
	task_comment_task: this.checkAndFormat_task_comment_task
};


//------------------------ The most important function that map request to an object well formed for the database -----------------------------
module.exports.mapTaskComment = function(req){

	let result = {};

	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && fields.includes(key)){
			result[key] = checkAndFormatCallable[key](req.body[key]);
		}
	}

	return result;
};
