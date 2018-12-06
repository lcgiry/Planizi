var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const Role = sequelize.import('../models/role.js');
const User = sequelize.import('../models/user.js');
var roleValidator = require('../services/validators/role-validator');
User.hasOne(Role);

//----------------------------------------- ROLE TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup ROLE
 * @api {GET} /role/roles Get all roles
 * @apiDescription Retrieve all information about all roles inserted
 * @apiSuccess {Object[]} roles The array with all roles
 * @apiSuccess {String} roles.role_label The mail of the user to retrieve (ID)
 * @apiSuccess {String} roles.role_name The english name of the role to display
 * @apiSuccess {String} roles.role_name_fr The french name of the role to display
 * @apiSuccess {String} roles.role_description The description of the role
 * @apiSuccess {Date} createdAt The creation date of the role raw
 * @apiSuccess {Date} updatedAt The last date update of the role raw
 * @apiUse ErrorGetGroup
 */
router.get('/roles', function(req, res, next) {

	Role.findAll({ raw: true })
		.then(roleResult => {
			if (roleResult) {
				res.type('json');
				res.send({ roles : roleResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no roles in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup ROLE
 * @api {GET} /role/role/:label Get one role
 * @apiDescription Retrieve all information about a role
 * @apiParam {String} label ``REQUIRED`` The label given to the role (ID)
 * @apiSuccess {String} role_label The mail of the user to retrieve (ID)
 * @apiSuccess {String} role_name The english name of the role to display
 * @apiSuccess {String} role_name_fr The french name of the role to display
 * @apiSuccess {String} role_description The description of the role
 * @apiSuccess {Date} createdAt The creation date of the role raw
 * @apiSuccess {Date} updatedAt The last date update of the role raw
 * @apiUse ErrorGetGroup
 */
router.get('/role/:label', function(req, res, next) {

	Role.findOne({ where: { role_label : roleValidator.checkAndFormat_role_label(req.params.label) }, raw: true })
		.then(roleResult => {
			if (roleResult) {
				res.type('json');
				res.send(roleResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The role does not exist'));
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
 * @apiGroup ROLE
 * @api {POST} /role/role/ Post a new role
 * @apiDescription Create a new role in database
 * @apiParam (Body) {String} role_label ``REQUIRED`` The label given to the role (ID)
 * @apiParam (Body) {String} role_name ``REQUIRED`` The english name of the role to display
 * @apiParam (Body) {String} role_name_fr ``REQUIRED`` The french name of the role to display
 * @apiParam (Body) {String} role_description The description of the role
 * @apiSuccess (Success 201) {String} role_label The role label of the new role.
 * @apiUse ErrorPostGroup
 */
router.post('/role/', function(req, res, next) {

	if(req.is('application/json')){

		var newRolePromise = Role.build(roleValidator.mapRole(req));

		Role.findOne({ where: { role_label : roleValidator.checkAndFormat_role_label(req.body.role_label) } })
			.then( result =>{
				//If role does not exist yet
				if(result === null){
					//Save the new role
					Promise.all([newRolePromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"role_label": result[0].role_label
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If role exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The user is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the role exists : "+err));
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
 * @apiGroup ROLE
 * @api {PUT} /role/role/:label Update a role
 * @apiDescription Update a role
 * @apiParam {String} label ``REQUIRED`` The label of the role (ID)
 * @apiParam (Body) {String} role_label The label given to the role (ID)
 * @apiParam (Body) {String} role_name The english name of the role to display
 * @apiParam (Body) {String} role_name_fr The french name of the role to display
 * @apiParam (Body) {String} role_description The description of the role
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.put('/role/:label', function (req, res, next) {

	if(req.is('application/json')){

		Role.findOne({  where: { role_label : roleValidator.checkAndFormat_role_label(req.params.label) } })
			.then( roleResult => {
				if (roleResult) {

					roleResult.update(roleValidator.mapRole(req)).then( result => {
						res.status(204).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update role : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The role does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the role exists : "+err));
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
 * @apiGroup ROLE
 * @api {DELETE} /role/role/:label Delete the role
 * @apiDescription Delete definitively the role of the database
 * @apiParam {String} label ``REQUIRED`` The label of the role (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/role/:label', function (req, res, next) {

	Role.destroy({ where: {role_label: roleValidator.checkAndFormat_role_label(req.params.label)}})
		.then( result => {
			if (result > 0) {
				res.status(204).end();
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The role does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to delete the role : "+err));
		});

});

//----------------------------------------- USER_TEAM TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError BadRequest Your request is invalid.
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup ROLE
 * @api {GET} /role/users/:label Get all users linked to a role
 * @apiDescription Retrieve all users linked linked to a particular role
 * @apiParam {String} label ``REQUIRED`` The label given to the role (ID)
 * @apiSuccess {String} role The role related to the next users
 * @apiSuccess {Object[]} users The array with all users linked to the role
 * @apiSuccess {String} users.user_mail The mail of the user to retrieve (ID)
 * @apiSuccess {String} users.user_name The name of the user
 * @apiSuccess {String} users.user_surname The surname of the user
 * @apiSuccess {String} users.user_nickname The nickname of the user 
 * @apiSuccess {Object} users.user_role *JOIN TABLE* The association table between roles and users
 * @apiSuccess {Integer} users.user_role.role_id *JOIN TABLE* The ID of the raw
 * @apiSuccess {String}  users.user_role.role_user *JOIN TABLE* The foreign key to user
 * @apiSuccess {String} users.user_role.role_role *JOIN TABLE* The foreign key to role
 * @apiSuccess {Date}  users.user_role.createdAt *JOIN TABLE* The creation date of the raw
 * @apiSuccess {Date}  users.user_role.updatedAt *JOIN TABLE* The last date update of the raw
 * @apiUse ErrorGetGroup
 */
router.get('/users/:label', function(req, res, next) {
	Role.findOne({where: {role_label: req.params.label}})
		.then(result=>{
			if(result) {
				result.getUsers({attributes: ['user_mail', 'user_name','user_surname','user_nickname']})
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({role: result[0].user_role.user_role_role, users: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("There is no user with this role"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the users for the role : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The role does not exist"));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the role exists : "+err));
		});

});



module.exports = router;
