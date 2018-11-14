var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

var teamValidator = require('../services/validators/team-validator');
var errorResponse = require('../errors/errors-response');
const Team = sequelize.import('../models/team.js');
const User = sequelize.import('../models/user.js');
const User_Team = sequelize.import('../models/user_team.js');
Team.belongsToMany(User, {through: User_Team, foreignKey: 'user_team_team', otherKey:'user_team_user'});
	

//----------------------------------------- TEAM TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup TEAM
 * @api {GET} /team/teams Get all teams
 * @apiDescription Retrieve all information about all teams inserted
 * @apiSuccess {Object[]} teams The array with all teams
 * @apiSuccess {String} teams.team_label The mail of the user to retrieve (ID)
 * @apiSuccess {String} teams.team_name The english name of the team to display
 * @apiSuccess {String} teams.team_name_fr The french name of the team to display
 * @apiSuccess {String} teams.team_description The description of the team
 * @apiSuccess {Date} createdAt The creation date of the team raw
 * @apiSuccess {Date} updatedAt The last date update of the team raw
 * @apiUse ErrorGetGroup
 */
router.get('/teams', function(req, res, next) {

	Team.findAll({ raw: true })
		.then(teamResult => {
			if (teamResult) {
				res.type('json');
				res.send({ teams : teamResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no teams in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup TEAM
 * @api {GET} /team/team/:label Get one team
 * @apiDescription Retrieve all information about a team
 * @apiParam {String} label ``REQUIRED`` The label given to the team (ID)
 * @apiSuccess {String} team_label The mail of the user to retrieve (ID)
 * @apiSuccess {String} team_name The english name of the team to display
 * @apiSuccess {String} team_name_fr The french name of the team to display
 * @apiSuccess {String} team_description The description of the team
 * @apiSuccess {Date} createdAt The creation date of the team raw
 * @apiSuccess {Date} updatedAt The last date update of the team raw
 * @apiUse ErrorGetGroup
 */
router.get('/team/:label', function(req, res, next) {

	Team.findOne({ where: { team_label : teamValidator.checkAndFormat_team_label(req.params.label) }, raw: true })
		.then(teamResult => {
			if (teamResult) {
				res.type('json');
				res.send(teamResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The team does not exist'));
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
 * @apiGroup TEAM
 * @api {POST} /team/team/ Post a new team
 * @apiDescription Create a new team in database
 * @apiParam (Body) {String} team_label ``REQUIRED`` The label given to the team (ID)
 * @apiParam (Body) {String} team_name ``REQUIRED`` The english name of the team to display
 * @apiParam (Body) {String} team_name_fr ``REQUIRED`` The french name of the team to display
 * @apiParam (Body) {String} team_description The description of the team
 * @apiSuccess (Success 201) {String} team_label The team label of the new team.
 * @apiUse ErrorPostGroup
 */
router.post('/team/', function(req, res, next) {

	if(req.is('application/json')){

		var newTeamPromise = Team.build(teamValidator.mapTeam(req));

		Team.findOne({ where: { team_label : teamValidator.checkAndFormat_team_label(req.body.team_label) } })
			.then( result =>{
				//If team does not exist yet
				if(result === null){
					//Save the new team
					Promise.all([newTeamPromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"team_label": result[0].team_label
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If team exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The user is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the team exists : "+err));
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
 * @apiGroup TEAM
 * @api {PUT} /team/team/:label Update a team
 * @apiDescription Update a team
 * @apiParam {String} label ``REQUIRED`` The label of the team (ID)
 * @apiParam (Body) {String} team_label The label given to the team (ID)
 * @apiParam (Body) {String} team_name The english name of the team to display
 * @apiParam (Body) {String} team_name_fr The french name of the team to display
 * @apiParam (Body) {String} team_description The description of the team
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.put('/team/:label', function (req, res, next) {

	if(req.is('application/json')){

		Team.findOne({  where: { team_label : teamValidator.checkAndFormat_team_label(req.params.label) } })
			.then( teamResult => {
				if (teamResult) {

					teamResult.update(teamValidator.mapTeam(req)).then( result => {
						res.status(204).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update team : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The team does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the team exists : "+err));
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
 * @apiGroup TEAM
 * @api {DELETE} /team/team/:label Delete the team
 * @apiDescription Delete definitively the team of the database
 * @apiParam {String} label ``REQUIRED`` The label of the team (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/team/:label', function (req, res, next) {

	Team.destroy({ where: {team_label: teamValidator.checkAndFormat_team_label(req.params.label)}})
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
			res.send(errorResponse.InternalServerError("Problem to delete the team : "+err));
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
 * @apiGroup TEAM
 * @api {GET} /team/users/:label Get all users linked to a team
 * @apiDescription Retrieve all users linked linked to a particular team
 * @apiParam {String} label ``REQUIRED`` The label given to the team (ID)
 * @apiSuccess {String} team The team related to the next users
 * @apiSuccess {Object[]} users The array with all users linked to the team
 * @apiSuccess {String} users.user_mail The mail of the user to retrieve (ID)
 * @apiSuccess {String} users.user_name The name of the user
 * @apiSuccess {String} users.user_surname The surname of the user
 * @apiSuccess {String} users.user_gender The gender of the user ('m' or 'f')
 * @apiSuccess {String} users.user_phone The phone number of the user
 * @apiSuccess {Date} users.user_birthdate The birthdate in YYYY-MM-DD format
 * @apiSuccess {String} users.user_description The description written by the user
 * @apiSuccess {String} users.user_experience The personal experience of the user
 * @apiSuccess {String} users.user_incapacity The possible incapacities og the user
 * @apiSuccess {String} users.user_teeshirt_size The teeshirt-size of the user ('S', 'M', 'L' or 'XL')
 * @apiSuccess {Integer} users.user_trust_point The trust point given for the user
 * @apiSuccess {Integer} users.user_involvement_point The involvement point given for the user
 * @apiSuccess {Integer} users.user_happiness_point The happiness level of the user
 * @apiSuccess {String} users.user_rights The ID rights of the user among all rights stored in 'rights' table
 * @apiSuccess {String} users.user_role The ID role of the user among all roles stores in 'role' table
 * @apiSuccess {String} users.user_social_security_card_number The SSN of the user.
 * @apiSuccess {String} users.user_social_security_card_file The path file of the SS card of the user
 * @apiSuccess {String} users.user_identity_card_file The path file of the Identity card of the user
 * @apiSuccess {String} users.user_cv_file The path file of the cv of the user
 * @apiSuccess {Date} users.user_last_login The date of the last login user
 * @apiSuccess {Date} users.cratedAt The creation date of the user raw
 * @apiSuccess {Date} users.updatedAt The last date update of the user raw
 * @apiSuccess {Object} users.user_team *JOIN TABLE* The association table between teams and users
 * @apiSuccess {Integer} users.user_team.team_id *JOIN TABLE* The ID of the raw
 * @apiSuccess {String}  users.user_team.team_user *JOIN TABLE* The foreign key to user
 * @apiSuccess {String} users.user_team.team_team *JOIN TABLE* The foreign key to team
 * @apiSuccess {Date}  users.user_team.createdAt *JOIN TABLE* The creation date of the raw
 * @apiSuccess {Date}  users.user_team.updatedAt *JOIN TABLE* The last date update of the raw
 * @apiUse ErrorGetGroup
 */
router.get('/users/:label', function(req, res, next) {
	Team.findOne({where: {team_label: req.params.label}})
		.then(result=>{
			if(result) {
				result.getUsers()
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({team: result[0].user_team.user_team_team, users: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("There is no user in the team"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the users for the team : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The team does not exist"));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the team exists : "+err));
		});

});



module.exports = router;
