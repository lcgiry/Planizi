var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

var shiftSubsetValidator = require('../services/validators/shift_subset-validator');
var errorResponse = require('../errors/errors-response');
const Shift_Subset = sequelize.import('../models/shift_subset.js');
const Task = sequelize.import('../models/task.js');
const Task_Shift_Subset = sequelize.import('../models/task_shift_subset');
Task.belongsToMany(Shift_Subset, {through: Task_Shift_Subset, foreignKey: 'task_shift_subset_task', otherKey:'task_shift_subset_shift_subset'});


//----------------------------------------- SHIFT_SUBSET TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup SHIFT_SUBSET
 * @api {GET} /shift_subset/all Get all shift subsets
 * @apiDescription Retrieve all shifts of all tasks
 * @apiSuccess {Object[]} shift_subsets The array with all shift subsets
 * @apiSuccess {Integer} shift_subsets.shift_subset_id The id of the shift subset to retrieve (ID)
 * @apiSuccess {Date} shift_subsets.shift_subset_start The start date of the shift
 * @apiSuccess {Date} shift_subsets.shift_subset_end The end date of the shift
 * @apiSuccess {Date} shift_subsets.createdAt The creation date of the shift subset raw
 * @apiSuccess {Date} shift_subsets.updatedAt The last date update of the shift subset raw
 * @apiUse ErrorGetGroup
 */
router.get('/shift_subsets', function(req, res, next) {

	Shift_Subset.findAll({ raw: true })
		.then(shiftSubsetResult => {
			if (shiftSubsetResult) {
				res.type('json');
				res.send({ shift_subsets : shiftSubsetResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no shift subset in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup SHIFT_SUBSET
 * @api {GET} /shift_subset/shift_subset/:id Get one team
 * @apiDescription Retrieve all information about a team
 * @apiParam {Integer} id ``REQUIRED`` The id of the shift subset to retrieve (ID)
 * @apiSuccess {Integer} shift_subset_id The id of the shift subset to retrieve (ID)
 * @apiSuccess {Date} shift_subset_start The start date of the shift
 * @apiSuccess {Date} shift_subset_end The end date of the shift
 * @apiSuccess {Date} createdAt The creation date of the shift subset raw
 * @apiSuccess {Date} updatedAt The last date update of the shift subset raw
 * @apiUse ErrorGetGroup
 */
router.get('/shift_subset/:id', function(req, res, next) {

	Shift_Subset.findOne({ where: { shift_subset_id : shiftSubsetValidator.checkAndFormat_shift_subset_id(req.params.id) }, raw: true })
		.then(shiftSubsetResult => {
			if (shiftSubsetResult) {
				res.type('json');
				res.send(shiftSubsetResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The shift subset does not exist'));
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
 * @apiGroup SHIFT_SUBSET
 * @api {POST} /shift_subset/shift_subset/ Post a new shift subset
 * @apiDescription Create a new shift subset in database
 * @apiParam (Body) {Date} shift_subset_start ``REQUIRED`` The start date of the shift
 * @apiParam (Body) {Date} shift_subset_end ``REQUIRED`` The end date of the shift
 * @apiSuccess (Success 201) {String} shift_subset_id The id of the new shift_subset
 * @apiUse ErrorPostGroup
 */
router.post('/shift_subset/', function(req, res, next) {

	if(req.is('application/json')){

		var newShiftSubsetPromise = Shift_Subset.build(shiftSubsetValidator.mapShiftSubset(req));

		Shift_Subset.findOne({ where: { shift_subset_start : shiftSubsetValidator.checkAndFormat_shift_subset_start(req.body.shift_subset_start), shift_subset_end: shiftSubsetValidator.checkAndFormat_shift_subset_end(req.body.shift_subset_end)} })
			.then( result =>{
				//If team does not exist yet
				if(result === null){
					//Save the new team
					Promise.all([newShiftSubsetPromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"shift_subset_id": result[0].shift_subset_id
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If team exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The shift subset is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the shift subset exists : "+err));
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
 * @apiGroup SHIFT_SUBSET
 * @api {PUT} /shift_subset/shift_subset/:id Update a shift subset
 * @apiDescription Update a team
 * @apiParam {Integer} id ``REQUIRED`` The id of the shift subset (ID)
 * @apiParam (Body) {Date} shift_subset_start The start date of the shift
 * @apiParam (Body) {Date} shift_subset_end The end date of the shift
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPutGroup
 */
router.put('/shift_subset/:id', function (req, res, next) {

	if(req.is('application/json')){

		Shift_Subset.findOne({  where: { shift_subset_id: shiftSubsetValidator.checkAndFormat_shift_subset_id(req.params.id) } })
			.then( shiftSubsetResult => {
				if (shiftSubsetResult) {

					shiftSubsetResult.update(shiftSubsetValidator.mapShiftSubset(req)).then( result => {
						res.status(204).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update the shift subset : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The shift subset does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the shift subset exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});

/**
 * @apiDefine ErrorDeleteGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError ContentTypeInvalid The content-type of the request is invalid..
 * @apiError UnsupportedMediaTypeError The body passed is invalid.
 * @apiError (Error 5xx) InternalServerError The problem is due to the server
 * @apiError RessourceAlreadyExist The ressource already exists
 *
 */
/**
 * @apiGroup SHIFT_SUBSET
 * @api {DELETE} /shift_subset/shift_subset/:id Delete the shift subset
 * @apiDescription Delete definitively the shift_subset of the database
 * @apiParam {String} label ``REQUIRED`` The id of the shift_subset (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/shift_subset/:id', function (req, res, next) {

	Shift_Subset.destroy({ where: {shift_subset_id: shiftSubsetValidator.checkAndFormat_shift_subset_id(req.params.id)}})
		.then( result => {
			if (result > 0) {
				res.status(204).end();
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The shift subset does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to delete the shift subset : "+err));
		});

});

//----------------------------------------- USER_TEAM TABLE




module.exports = router;
