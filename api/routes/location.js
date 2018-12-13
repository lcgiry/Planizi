var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

var locationValidator = require('../services/validators/location-validator');
var errorResponse = require('../errors/errors-response');
const Task = sequelize.import('../models/task.js');
const Location = sequelize.import('../models/location.js');

//----------------------------------------- TASK TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup LOCATION
 * @api {GET} /location/locations Get all locations
 * @apiDescription Retrieve all information about all location available
 * @apiSuccess {Object[]} locations The array with all locations
 * @apiSuccess {Integer} locations.location_id The id of the location (ID)
 * @apiSuccess {String} locations.location_label The label of the location
 * @apiSuccess {Decimal} locations.location_longitude The longitude information of the location
 * @apiSuccess {Decimal} locations.location_latitude The latitude information of the location
 * @apiSuccess {String} locations.location_address The address of the location
 * @apiSuccess {String} locations.location_postcode The postcode of the location
 * @apiSuccess {String} locations.location_city The city of the location
 * @apiSuccess {String} locations.location_description The description of the location
 * @apiSuccess {Date} createdAt The creation date of the location raw
 * @apiSuccess {Date} updatedAt The last date update of the location raw
 * @apiUse ErrorGetGroup
 */
router.get('/locations', function(req, res, next) {

	Location.findAll({ raw: true })
		.then(locationResult => {
			if (locationResult) {
				res.type('json');
				res.send({ locations : locationResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no location in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup LOCATION
 * @api {GET} /location/location/:id Get one location
 * @apiDescription Retrieve all information about a location
 * @apiParam {String} id ``REQUIRED`` The id of the location to retrieve (ID)
 * @apiSuccess {Integer} location_id The id of the location (ID)
 * @apiSuccess {String} location_label The label of the location
 * @apiSuccess {Decimal} location_longitude The longitude information of the location
 * @apiSuccess {Decimal} location_latitude The latitude information of the location
 * @apiSuccess {String} location_address The address of the location
 * @apiSuccess {String} location_postcode The postcode of the location
 * @apiSuccess {String} location_city The city of the location
 * @apiSuccess {String} location_description The description of the location
 * @apiSuccess {Date} createdAt The creation date of the location raw
 * @apiSuccess {Date} updatedAt The last date update of the location raw
 * @apiUse ErrorGetGroup
 */
router.get('/location/:id', function(req, res, next) {

	Location.findOne({ where: {location_id : locationValidator.checkAndFormat_location_id(req.params.id) }, raw: false })
		.then(locationResult => {
			if (locationResult) {
				res.type('json');
				res.send(locationResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The location does not exist'));
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
 * @apiGroup LOCATION
 * @api {POST} /location/location/ Post a new task
 * @apiDescription Create a new location in database
 * @apiParam (Body) {String} location_label ``REQUIRED`` The label of the location
 * @apiParam (Body) {Decimal} location_longitude The longitude information of the location
 * @apiParam (Body) {Decimal} location_latitude The latitude information of the location
 * @apiParam (Body) {String} location_address ``REQUIRED``  The address of the location
 * @apiParam (Body) {String} location_postcode ``REQUIRED``  The postcode of the location
 * @apiParam (Body) {String} location_city ``REQUIRED`` The city of the location
 * @apiParam (Body) {String} location_description The description of the location
 * @apiSuccess (Success 201) {Integer} location_id The id of the new location.
 * @apiUse ErrorPostGroup
 */
router.post('/location/', function(req, res, next) {

	if(req.is('application/json')){

		var newLocationPromise = Location.build(locationValidator.mapLocation(req));

		Location.findOne({ where: { location_label: locationValidator.checkAndFormat_location_id(req.body.location_label) } })
			.then( (result) =>{
				//If task does not exist yet
				if(result === null){
					//Save the new location
					Promise.all([newLocationPromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"locationd_id": result[0].location_id
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If task exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The location is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the location exists : "+err));
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
 * @apiGroup LOCATION
 * @api {PUT} /location/location/:id Update a location
 * @apiDescription Update a location
 * @apiParam {Integer} id ``REQUIRED`` The id of the location (ID)
 * @apiParam {String} location_label The label of the location
 * @apiParam (Body) {Decimal} location_longitude The longitude information of the location
 * @apiParam (Body) {Decimal} location_latitude The latitude information of the location
 * @apiParam (Body) {String} location_address The address of the location
 * @apiParam (Body) {String} location_postcode The postcode of the location
 * @apiParam (Body) {String} location_city The city of the location
 * @apiParam (Body) {String} location_description The description of the location
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.put('/location/:id', function (req, res, next) {

	if(req.is('application/json')){

		Location.findOne({  where: { location_id : locationValidator.checkAndFormat_location_id(req.params.id) } })
			.then( locationResult => {
				if (locationResult) {

					locationResult.update(locationValidator.mapLocation(req)).then( result => {
						res.status(204).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update the location : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The location does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the location exists : "+err));
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
 * @apiGroup LOCATION
 * @api {DELETE} /location/location/:id Delete a location
 * @apiDescription Delete definitively the location of the database
 * @apiParam {String} id ``REQUIRED`` The id of the location (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/location/:id', function (req, res, next) {

	var locationPromise = Location.destroy({ where: {location_id: locationValidator.checkAndFormat_location_id(req.params.id)}});

		Promise.all([locationPromise])
			.then( result => {
				if (result > 0) {
					res.status(204).end();
				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The location does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to delete the location : "+err));
			});

});

//----------------------------------------- LOCATION_TASK TABLE


module.exports = router;
