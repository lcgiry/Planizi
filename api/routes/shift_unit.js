var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;


var errorResponse = require('../errors/errors-response');
var shift_unitValidator = require('../services/validators/shift_unit-validator');
const Shift_Unit = sequelize.import('../models/shift_unit.js');
const Availibility_User = sequelize.import('../models/availibility_user.js');
const User = sequelize.import('../models/user.js');
Shift_Unit.belongsToMany(User, {through: Availibility_User, foreignKey: 'availibility_user_shift_unit', otherKey: 'availibility_user_user'});
User.belongsToMany(Shift_Unit, {through: Availibility_User, foreignKey: 'availibility_user_user', otherKey: 'availibility_user_shift_unit'});


//----------------------------------------- SHIFT_UNIT TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup SHIFT_UNIT
 * @api {GET} /shift_unit/all Get all shift units
 * @apiDescription Retrieve all information about all shift units inserted
 * @apiSuccess {Object[]} shift_units The array with all teams
 * @apiSuccess {String} shift_units.shift_unit_id The ID of shift unit
 * @apiSuccess {String} shift_units.shift_unit_start The beginning of the shift unit
 * @apiSuccess {String} shift_units.shift_unit_end The end of the shift unit
 * @apiSuccess {Date} createdAt The creation date of the shift_unit raw
 * @apiSuccess {Date} updatedAt The last date update of the shift_unit raw
 * @apiUse ErrorGetGroup
 */
router.get('/all', function(req, res, next) {

	Shift_Unit.findAll({ raw: true })
		.then(shiftResult => {
			if (shiftResult) {
				res.type('json');
				res.send({ shift_units : shiftResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no shift unit in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup SHIFT_UNIT
 * @api {GET} /shift_unit/:id Get all shift units
 * @apiDescription Retrieve all information about one shift_unit in table
 * @apiSuccess {String} shift_unit_id The ID of shift unit
 * @apiSuccess {String} shift_unit_start The beginning of the shift unit
 * @apiSuccess {String} shift_unit_end The end of the shift unit
 * @apiSuccess {Date} createdAt The creation date of the shift_unit raw
 * @apiSuccess {Date} updatedAt The last date update of the shift_unit raw
 * @apiUse ErrorGetGroup
 */
router.get('/shift_unit/:id', function(req, res, next) {

	Shift_Unit.findOne({ where: { shift_unit_id :req.params.id }, raw: true })
		.then(shiftResult => {
			if (shiftResult) {
				res.type('json');
				res.send(shiftResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The shift_unit id does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup SHIFT_UNIT
 * @api {POST} /shift_unit/ Create a new shift unit
 * @apiParam (Body) {Date} shift_unit_start ``REQUIRED`` The begining of the shift_unit
 * @apiParam (Body) {Date} shift_unit_end ``REQUIRED`` The end of the shift_unit
 * @apiParam (Body) {Integer} shift_unit_point ``REQUIRED`` The points of the unit_shift
 * @apiSuccess (Success 201) {String} shift_unit_id The ID of the new shift_unit.
 * @apiUse ErrorPostGroup
 */
router.post('/shift_unit/', function(req, res, next) {

	if(req.is('application/json')){

		Shift_Unit.findOne({ where: {shift_unit_start : shift_unitValidator.checkAndFormat_shift_unit_start(req.body.shift_unit_start)}})
			.then( result =>{
				//If shift_unit does not exist yet
				if(result === null){
					//Save the new shift_unit
					var newShift_UnitPromise = Shift_Unit.build(shift_unitValidator.mapShiftUnit(req));
					Promise.all([newShift_UnitPromise.save()])
						.then( result => {
							//Creating new availibility_user raws
							User.findAll({attributes: ['user_mail']})
								.then(userResult => {
									result[0].setUsers(userResult)
								})
								.catch(err => {
									Shift_Unit.destroy({ where: {shift_unit_id : result[0].shift_unit_id}});
									res.status(500);
									res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
								});

							res.status(201);
							res.send({
								"shift_unit_id": result[0].shift_unit_id
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
					//If shift_unit exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The shift unit yet exists, id is : " + result.shift_unit_id));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the shift unit exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});

/**
 * @apiGroup SHIFT_UNIT
 * @api {POST} /shift_unit/:id Update the shift unit
 * @apiParam (Body) {Date} shift_unit_start ``REQUIRED`` The begining of the shift_unit
 * @apiParam (Body) {Date} shift_unit_end The end of the shift_unit
 * @apiParam (Body) {Integer} shift_unit_point ``REQUIRED`` The points of the unit_shift
 * @apiSuccess (Success 201) {String} shift_unit_id The ID of the new shift_unit.
 * @apiUse ErrorPostGroup
 */
router.put('/shift_unit/:id', function (req, res, next) {

	if(req.is('application/json')){

		Shift_Unit.findOne({ where: {shift_unit_id: shift_unitValidator.checkAndFormat_shift_unit_id(req.params.id)}})
			.then(shiftUnitResult => {
				if (shiftUnitResult) {

					shiftUnitResult.update(shift_unitValidator.mapShiftUnit(req)).then( result => {
						res.status(200).send(result);
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update shift_unit : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The shift unit does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the shift unit exists : "+err));
			});

	}else{
		res.status(406);
		res.send(errorResponse.ContentTypeInvalid("Content-type received: "+req.get('Content-Type')+". Content-type required : application/json"));
	}

});


router.delete('/shift_unit/:id', function (req, res, next) {
	//@todo check if the shift_unit if refered before destroy entry
	Shift_Unit.destroy({ where: {shift_unit_id: shift_unitValidator.checkAndFormat_shift_unit_id(req.params.id)}})
	//Availibility_User.destroy({ where: {availibity_user_shift_unit_id: shift_unitValidator.checkAndFormat_shift_unit_id(req.params.id)}})
		.then( result => {
			if (result > 0) {
				res.status(204).end();
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The shift_unit_id does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to delete the shift : "+err));
		});

});


router.put('/generate_availibilities/:id', function(req, res, next) {

	Shift_Unit.findOne({where: {shift_unit_id: req.params.id}})
		.then(shiftResult=>{
			if(shiftResult) {
				User.findAll({attributes: ['user_mail']}).then(userResult => {

					shiftResult.setUsers(userResult)
					res.status(200);
					res.send(userResult);

				})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to set availibity_user raws the users for the shift unit : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The shift_unit does not exist : "+err));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the shift_unit exists : "+err));
		});

});

module.exports = router;
