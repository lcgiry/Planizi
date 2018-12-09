var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

var taskValidator = require('../services/validators/task-validator');
var taskCommentValidator = require('../services/validators/task_comment-validator');
var errorResponse = require('../errors/errors-response');
const Task = sequelize.import('../models/task.js');
const Team = sequelize.import('../models/team.js');
const Location = sequelize.import('../models/location.js');
const User = sequelize.import('../models/user.js');
const Task_Group = sequelize.import('../models/task_group.js');
const Task_Instructions = sequelize.import('../models/task_instructions.js');
const Task_Comment = sequelize.import('../models/task_comment.js');

Task.hasOne(Task_Instructions, {as: 'TaskInstructions', foreignKey: 'task_instructions_id', sourceKey: 'task_instruction'});
Task.belongsTo(User, {as: 'TaskSupervisor', foreignKey: 'task_supervisor'});
Task.belongsTo(User, {as: 'TaskMaster', foreignKey: 'task_master'});
Task.belongsTo(Task_Group, {as: 'TaskGroup', foreignKey: 'task_group'});
Task.belongsTo(Location, {as: 'TaskLocation', foreignKey: 'task_location'});
Task.belongsTo(Team, {as: 'TaskTeam', foreignKey: 'task_team'});
Task.hasMany(Task_Comment, {as: 'TaskComments', foreignKey: 'task_comment_task'});


//----------------------------------------- TASK TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup TASK
 * @api {GET} /task/tasks Get all tasks
 * @apiDescription Retrieve all information about all tasks inserted
 * @apiSuccess {Object[]} tasks The array with all tasks
 * @apiSuccess {Integer} tasks.task_id The id of the task (ID)
 * @apiSuccess {String} tasks.task_label The title of the task
 * @apiSuccess {String} tasks.task_description The little description of the task
 * @apiSuccess {String} tasks.task_team The team linked to the task
 * @apiSuccess {String} tasks.task_supervisor The supervisor email of the task in place
 * @apiSuccess {String} tasks.task_master The master email of the task, the people to contact if a problem occurs
 * @apiSuccess {String} tasks.task_group The ID group task that belong the task
 * @apiSuccess {String} tasks.task_location The ID location where the task take place
 * @apiSuccess {String} tasks.task_instruction The ID of the instructions
 * @apiSuccess {Date} createdAt The creation date of the task raw
 * @apiSuccess {Date} updatedAt The last date update of the task raw
 * @apiUse ErrorGetGroup
 */
router.get('/tasks', function(req, res, next) {

	Task.findAll({ raw: true })
		.then(taskResult => {
			if (taskResult) {
				res.type('json');
				res.send({ tasks : taskResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no tasks in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup TASK
 * @api {GET} /task/task/:id Get one task
 * @apiDescription Retrieve all information about a task
 * @apiParam {String} id ``REQUIRED`` The id of the task to retrieve (ID)
 * @apiSuccess {Integer} task_id The id of the task (ID)
 * @apiSuccess {String} task_label The title of the task
 * @apiSuccess {String} tasks_description The little description of the task
 * @apiSuccess {String} task_team The team linked to the task
 * @apiSuccess {String} task_supervisor The supervisor email of the task in place
 * @apiSuccess {String} task_master The master email of the task, the people to contact if a problem occurs
 * @apiSuccess {String} task_group The ID group task that belong the task
 * @apiSuccess {String} task_location The ID location where the task take place
 * @apiSuccess {String} task_instruction The ID of the instructions
 * @apiSuccess {Date} createdAt The creation date of the task raw
 * @apiSuccess {Date} updatedAt The last date update of the task raw
 * @apiUse ErrorGetGroup
 */
router.get('/task/:id', function(req, res, next) {

	Task.findOne({ where: {
		task_id : taskValidator.checkAndFormat_task_id(req.params.id) },
		include: [{model: User, as:'TaskSupervisor'},
			'TaskGroup',
			'TaskInstructions',
			'TaskLocation',
			'TaskTeam',
			'TaskComments'],
		raw: false })
		.then(taskResult => {
			if (taskResult) {
				res.type('json');
				res.send(taskResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The task does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiDefine ErrorPostGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError ContentTypeInvalid The content-type of the request is invalid..
 * @apiError UnsupportedMediaTypeError The body passed is invalid.
 * @apiError (Error 5xx) InternalServerError The problem is due to the server
 * @apiError RessourceAlreadyExist The ressource already exists
 */
/**
 * @apiGroup TASK
 * @api {POST} /task/task/ Post a new task
 * @apiDescription Create a new task in database
 * @apiParam (Body) {String} task_label ``REQUIRED`` The title given to the task
 * @apiParam (Body) {String} tasks_description The little description of the task
 * @apiParam (Body) {String} task_team The team linked to the task
 * @apiParam (Body) {String} task_supervisor The supervisor email of the task in place
 * @apiParam (Body) {String} task_master ``REQUIRED``  The master email of the task, the people to contact if a problem occurs
 * @apiParam (Body) {String} task_group The ID group task that belong the task
 * @apiParam (Body) {String} task_location The ID location where the task take place
 * @apiSuccess (Success 201) {String} team_label The team label of the new team.
 * @apiUse ErrorPostGroup
 */
router.post('/task/', function(req, res, next) {

	if(req.is('application/json')){

		var newTaskPromise = Task.build(taskValidator.mapTask(req));

		Task.findOne({ where: { task_label: taskValidator.checkAndFormat_task_label(req.body.task_label) } })
			.then( (result) =>{
				//If task does not exist yet
				if(result === null){
					//Save the new task
					Promise.all([newTaskPromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"task_id": result[0].task_id
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If task exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The task is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the task exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});

/**
* @apiDefine ErrorPutGroup
* @apiError AuthenticationRequired You must be authenticated.
* @apiError ContentTypeInvalid The content-type of the request is invalid..
* @apiError UnsupportedMediaTypeError The body passed is invalid.
* @apiError (Error 5xx) InternalServerError The problem is due to the server
* @apiError RessourceAlreadyExist The ressource already exists
*/
/**
 * @apiGroup TASK
 * @api {PUT} /task/task/:id Update a task
 * @apiDescription Update a task
 * @apiParam {String} id ``REQUIRED`` The id of the task (ID)
 * @apiParam (Body) {String} task_label The title given to the task
 * @apiParam (Body) {String} tasks_description The little description of the task
 * @apiParam (Body) {String} task_team The team linked to the task
 * @apiParam (Body) {String} task_supervisor The supervisor email of the task in place
 * @apiParam (Body) {String} task_master The master email of the task, the people to contact if a problem occurs
 * @apiParam (Body) {String} task_group The ID group task that belong the task
 * @apiParam (Body) {String} task_location The ID location where the task take place
 * @apiParam (Body) {String} task_instruction The ID of the instructions
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.put('/task/:id', function (req, res, next) {

	if(req.is('application/json')){

		Task.findOne({  where: { task_id : taskValidator.checkAndFormat_task_id(req.params.id) } })
			.then( taskResult => {
				if (taskResult) {

					taskResult.update(taskValidator.mapTask(req)).then( result => {
						res.status(204).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update task : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The task does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the task exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});

/**
 * @apiDefine ErrorDeleteGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError (Error 5xx) InternalServerError The problem is due to the server
 * @apiError RessourceAlreadyExist The ressource already exists
 *
 */
/**
 * @apiGroup TASK
 * @api {DELETE} /task/task/:id Delete the task
 * @apiDescription Delete definitively the task, his instructions and his comments of the database
 * @apiParam {String} id ``REQUIRED`` The id of the task (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/task/:id', function (req, res, next) {

	var taskPromise = Task.destroy({ where: {task_id: taskValidator.checkAndFormat_task_id(req.params.id)}});
	var taskInstructionPromise = Task_Instructions.destroy({ where: {task_instructions_id: taskValidator.checkAndFormat_task_id(req.params.id)}});
	var taskCommentPromise = Task_Comment.destroy({ where: {task_comment_task: taskCommentValidator.checkAndFormat_task_comment_task(req.params.id)}});

		Promise.all([taskPromise, taskInstructionPromise, taskCommentPromise])
			.then( result => {
				res.status(204).end();
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to delete the task : "+err));
			});

});

//----------------------------------------- INSTRUCTION_TASK TABLE

/**
 * @apiGroup TASK
 * @api {GET} /task/instructions/:id Get instructions
 * @apiDescription Retrieve all information about a task
 * @apiParam {String} id ``REQUIRED`` The id of the task whose the instruction must be retrieved (ID)
 * @apiSuccess {Integer} task_instrucions_id The id of the instruction task (ID)
 * @apiSuccess {Blob} task_instructions_instructions All formated instructions of the task
 * @apiSuccess {Date} createdAt The creation date of the task raw
 * @apiSuccess {Date} updatedAt The last date update of the task raw
 * @apiUse ErrorGetGroup
 */
router.get('/instructions/:id', function(req, res, next) {

	Task.findOne({ where: { task_id: req.params.id }, attributes: ['task_id', 'task_instruction']})
		.then( taskResult => {

			if (taskResult) {

				taskResult.getTaskInstructions({raw: true})
					.then( instructions => {
						if (instructions) {
							instructions.task_instructions_instructions = instructions.task_instructions_instructions.toString('utf8');
							res.type('json');
							res.send(instructions);
						}else {
							res.status(404);
							res.send(errorResponse.RessourceNotFound('The instructions does not exist'));
						}
					})
					.catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
					});

			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The task does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiDefine ErrorPutGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError ContentTypeInvalid The content-type of the request is invalid..
 * @apiError UnsupportedMediaTypeError The body passed is invalid.
 * @apiError (Error 5xx) InternalServerError The problem is due to the server
 * @apiError RessourceAlreadyExist The ressource already exists
 */
/**
 * @apiGroup TASK
 * @api {PUT} /task/instructions/:id Update instructions
 * @apiDescription Insert or Update the instructions of a task
 * @apiParam {String} id ``REQUIRED`` The id of the task whose the instruction must be inserted (ID)
 * @apiParam (Body) {Blob} task_instructions_instructions All formated instructions of the task
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.put('/instructions/:id', function (req, res, next) {

	if(req.is('application/json')){

		Task.findOne({ where: { task_id : taskValidator.checkAndFormat_task_id(req.params.id) } })
			.then( taskResult => {
				if (taskResult) {

					Task_Instructions.findOne({ where: { task_instructions_id : taskValidator.checkAndFormat_task_id(req.params.id) } })
						.then( instructionResult => {
							if (instructionResult) {
								instructionResult.update({"task_instructions_id": req.params.id, "task_instructions_instructions": taskValidator.checkAndFormat_task_instruction(req.body.task_instructions_instructions)})
									.then( updateResult => {
										res.status(204).end();
									})
									.catch( updateErr => {
										res.status(500);
										res.send(errorResponse.InternalServerError("Problem to update the instructions : "+updateErr.message));
									});
							} else {
							//Save the new instruction
							Task_Instructions.build({"task_instructions_id": req.params.id, "task_instructions_instructions": taskValidator.checkAndFormat_task_instruction(req.body.task_instructions_instructions) }).save()
								.then( insertResult => {
									res.status(204).end();
								})
								.catch( err =>{
									res.status(500);
									res.send(errorResponse.InternalServerError("Problem to insert the instructions : "+err.message));
								});
							}
						})
						.catch( err => {
							res.status(500);
							res.send(errorResponse.InternalServerError("Problem to check if the instructions yet exist : "+err));
						});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The task does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the task exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});

//----------------------------------------- COMMENT_TASK TABLE

/**
 * @apiGroup TASK
 * @api {GET} /task/comments/:id Get all comments
 * @apiDescription Retrieve all comment about the task
 * @apiParam {String} id ``REQUIRED`` The id of the task whose the comments must be retrieved (ID)
 * @apiSuccess {Object[]} comments The array with all comments
 * @apiSuccess {Integer} comments.task_comment_id The id of the comment raw (ID)
 * @apiSuccess {Integer} comments.task_comment_owner The id of the user who has written the comment
 * @apiSuccess {String} comments.task_comment_content The comment
 * @apiSuccess {Date} comments.task_comment_date The date when the comment has been written
 * @apiSuccess {Integer} comments.task_comment_task The id of the task that it is linked
 * @apiSuccess {Date} comments.createdAt The creation date of the comment raw
 * @apiSuccess {Date} comments.updatedAt The last date update of the comment raw
 * @apiUse ErrorGetGroup
 */
router.get('/comments/:id', function(req, res, next) {

	Task.findOne({ where: { task_id: req.params.id }, attributes: ['task_id']})
		.then( taskResult => {
			if (taskResult) {

				taskResult.getTaskComments({raw: true, order: [['task_comment_date', 'ASC']]})
					.then( comments => {
						if (comments) {
							res.type('json');
							res.send({"comments": comments});
						}else {
							res.status(404);
							res.send(errorResponse.RessourceNotFound('No comment does not exist'));
						}
					})
					.catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
					});

			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The task does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiDefine ErrorPutGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError ContentTypeInvalid The content-type of the request is invalid..
 * @apiError UnsupportedMediaTypeError The body passed is invalid.
 * @apiError (Error 5xx) InternalServerError The problem is due to the server
 * @apiError RessourceAlreadyExist The ressource already exists
 */
/**
 * @apiGroup TASK
 * @api {POST} /task/instructions/:id Post a comment
 * @apiDescription Insert a comment about a task
 * @apiParam {String} id ``REQUIRED`` The id of the task whose the instruction must be inserted (ID)
 * @apiParam (Body) {Integer} task_comment_owner The id of the user who has written the comment
 * @apiParam (Body) {String} task_comment_content The content of the comment
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.post('/comment/:id', function (req, res, next) {

	if(req.is('application/json')){

		Task.findOne({ where: { task_id : taskValidator.checkAndFormat_task_id(req.params.id) } })
			.then( taskResult => {
				// If the task exists
				if (taskResult) {
					//Save the new comment
					req.body.task_comment_task = req.params.id;
					req.body.task_comment_date = Date.now();
					Task_Comment.build(taskCommentValidator.mapTaskComment(req)).save()
						.then( insertResult => {
							res.status(204).end();
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError("Problem to insert the comment : "+err.message));
						})

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The task does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the task exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});

/**
 * @apiDefine ErrorDeleteGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError (Error 5xx) InternalServerError The problem is due to the server
 * @apiError RessourceAlreadyExist The ressource already exists
 *
 */
/**
 * @apiGroup TASK
 * @api {DELETE} /task/comment/:id Delete a comment
 * @apiDescription Delete definitively the comment of the database
 * @apiParam {String} id ``REQUIRED`` The id of the comment (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/comment/:id', function (req, res, next) {

	var taskCommentPromise = Task_Comment.destroy({ where: {task_comment_id: taskCommentValidator.checkAndFormat_task_comment_id(req.params.id)}});

	Promise.all([taskCommentPromise])
		.then( result => {
			if (result > 0) {
				res.status(204).end();
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The team does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to delete the comment : "+err));
		});

});

module.exports = router;
