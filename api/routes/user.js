var express = require('express');
var router = express.Router();
var request = require('request');
var sequelize = require('../config/database/config-database').sequelize;

var serverConfig = require('../config/server.json');
var userValidator = require('../services/validators/user-validator');
var errorResponse = require('../errors/errors-response');
const User = sequelize.import('../models/user.js');
const Skill = sequelize.import('../models/skill.js');
const User_Skill = sequelize.import('../models/user_skill.js');
User.belongsToMany(Skill, {through: User_Skill, foreignKey: 'user_skill_user', otherKey:'user_skill_skill'});
const Team = sequelize.import('../models/team.js');
const User_Team = sequelize.import('../models/user_team.js');
User.belongsToMany(Team, {through: User_Team, foreignKey: 'user_team_user', otherKey:'user_team_team'});
const User_Friend = sequelize.import('../models/user_friend.js');
User.belongsToMany(User, {as: "friends", through: User_Friend, foreignKey: 'user_friend_user', otherKey: 'user_friend_friend'});
const Shift_Unit = sequelize.import('../models/shift_unit.js');
const Availibility_User = sequelize.import('../models/availibility_user.js');
User.belongsToMany(Shift_Unit, {as: "avaibilities", through: Availibility_User, foreignKey: 'availibility_user_user', otherKey: 'availibility_user_shift_unit'});

//----------------------------------------- USER TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup USER
 * @api {GET} /user/users Get all users
 * @apiDescription Retrieve all information about all users
 * @apiSuccess {Object[]} users The array with all users
 * @apiSuccess {String} users.user_mail The mail of the user to retrieve (ID)
 * @apiSuccess {String} users.user_name The name of the user
 * @apiSuccess {String} users.user_surname The surname of the user
 * @apiSuccess {String} users.user_nickname The nickname of the user
 * @apiSuccess {String} users.user_gender The gender of the user ('m' or 'f')
 * @apiSuccess {String} users.user_phone The phone number of the user
 * @apiSuccess {Date} users.user_birthdate The birthdate in YYYY-MM-DD format
 * @apiSuccess {Date} users.user_last_login The date of the last login user
 * @apiSuccess {Date} users.createdAt The creation date of the user raw
 * @apiSuccess {Date} users.updatedAt The last date update of the user raw
 * @apiUse ErrorGetGroup
 */
router.get('/users', function(req, res, next) {

	User.findAll({attributes: ['user_mail', 'user_name','user_surname','user_nickname','user_gender','user_phone','user_birthdate','user_last_login','createdAt']})
		.then(userResult => {
			if (userResult) {
				res.type('json');
				res.send({users: userResult});
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no user in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup USER
 * @api {GET} /user/user/:mail Get one user
 * @apiDescription Retrieve all information about an user
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to retrieve (ID)
 * @apiSuccess {String} user_mail The mail of the user to retrieve (ID)
 * @apiSuccess {String} user_name The name of the user
 * @apiSuccess {String} user_surname The surname of the user
 * @apiSuccess {String} user_gender The gender of the user ('m' or 'f')
 * @apiSuccess {String} user_phone The phone number of the user
 * @apiSuccess {Date} user_birthdate The birthdate in YYYY-MM-DD format
 * @apiSuccess {String} user_description The description written by the user
 * @apiSuccess {String} user_experience The personal experience of the user
 * @apiSuccess {String} user_incapacity The possible incapacities og the user
 * @apiSuccess {String} user_teeshirt_size The teeshirt-size of the user ('S', 'M', 'L' or 'XL')
 * @apiSuccess {Integer} user_trust_point The trust point given for the user
 * @apiSuccess {Integer} user_involvement_point The involvement point given for the user
 * @apiSuccess {Integer} user_happiness_point The happiness level of the user
 * @apiSuccess {String} user_rights The ID rights of the user among all rights stored in 'rights' table
 * @apiSuccess {String} user_role The ID role of the user among all roles stores in 'role' table
 * @apiSuccess {String} user_social_security_card_number The SSN of the user.
 * @apiSuccess {String} user_social_security_card_file The path file of the SS card of the user
 * @apiSuccess {String} user_identity_card_file The path file of the Identity card of the user
 * @apiSuccess {String} user_cv_file The path file of the cv of the user
 * @apiSuccess {Date} user_last_login The date of the last login user
 * @apiSuccess {Date} cratedAt The creation date of the user raw
 * @apiSuccess {Date} updatedAt The last date update of the user raw
 * @apiUse ErrorGetGroup
 */
router.get('/user/:mail', function(req, res, next) {

	User.findOne({ where: {user_mail: userValidator.checkAndFormat_user_mail(req.params.mail)}, raw: true })
		.then(userResult => {
			if (userResult) {
				res.type('json');
				// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
				res.send(userResult);
			} else {
				res.status(404);
				res.send(errorResponse.UserNotFound('The user does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});


/**
 * @apiGroup USER
 * @api {POST} /user/user/ Post a new user
 * @apiDescription Create a new user in database
 * @apiParam (Body) {String} user_mail ``REQUIRED`` The mail of the user to retrieve (ID)
 * @apiParam (Body) {String} user_name ``REQUIRED`` The name of the user
 * @apiParam (Body) {String} user_surname The surname of the user
 * @apiParam (Body) {String} user_gender ``REQUIRED`` The gender of the user ('m' or 'f')
 * @apiParam (Body) {String} user_phone ``REQUIRED`` The phone number of the user
 * @apiParam (Body) {Date} user_birthdate ``REQUIRED`` The birthdate in YYYY-MM-DD format
 * @apiParam (Body) {String} user_description The description written by the user
 * @apiParam (Body) {String} user_experience The personal experience of the user
 * @apiParam (Body) {String} user_incapacity The possible incapacities og the user
 * @apiParam (Body) {String} user_teeshirt_size The teeshirt-size of the user ('S', 'M', 'L' or 'XL')
 * @apiParam (Body) {Integer} user_trust_point The trust point given for the user
 * @apiParam (Body) {Integer} user_involvement_point The involvement point given for the user
 * @apiParam (Body) {Integer} user_happiness_point The happiness level of the user
 * @apiParam (Body) {String} user_rights The ID rights of the user among all rights stored in 'rights' table
 * @apiParam (Body) {String} user_role The ID role of the user among all roles stores in 'role' table
 * @apiParam (Body) {String} user_social_security_card_number The SSN of the user.
 * @apiParam (Body) {String} user_role The ID role of the user among all roles stores in 'role' table
 * @apiSuccess (Success 201) {String} user_mail The user mail of the new user.
 * @apiUse ErrorPostGroup
 */
router.post('/user/', function(req, res, next) {

	if(req.is('application/json')){

		var newUserPromise = User.build(userValidator.mapUser(req));

		User.findOne({ where: {user_mail : userValidator.checkAndFormat_user_mail(req.body.user_mail)} })
			.then( result =>{
				//If user does not exist yet
				if(result === null){
					//Save the new user
					Promise.all([newUserPromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"user_mail": result[0].user_mail
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If user exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The user is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the user exists : "+err));
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
 * @apiGroup USER
 * @api {PUT} /user/user/:mail Update the user
 * @apiDescription Update an user with new information
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to retrieve (ID)
 * @apiParam (Body) {String} user_name The name of the user
 * @apiParam (Body) {String} user_surname The surname of the user
 * @apiParam (Body) {String} user_gender The gender of the user ('m' or 'f')
 * @apiParam (Body) {String} user_phone The phone number of the user
 * @apiParam (Body) {Date} user_birthdate The birthdate in YYYY-MM-DD format
 * @apiParam (Body) {String} user_description The description written by the user
 * @apiParam (Body) {String} user_experience The personal experience of the user
 * @apiParam (Body) {String} user_incapacity The possible incapacities og the user
 * @apiParam (Body) {String} user_teeshirt_size The teeshirt-size of the user ('S', 'M', 'L' or 'XL')
 * @apiParam (Body) {Integer} user_trust_point The trust point given for the user
 * @apiParam (Body) {Integer} user_involvement_point The involvement point given for the user
 * @apiParam (Body) {Integer} user_happiness_point The happiness level of the user
 * @apiParam (Body) {String} user_rights The ID rights of the user among all rights stored in 'rights' table
 * @apiParam (Body) {String} user_role The ID role of the user among all roles stores in 'role' table
 * @apiParam (Body) {String} user_social_security_card_number The SSN of the user.
 * @apiParam (Body) {String} user_role The ID role of the user among all roles stores in 'role' table
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPutGroup
 */
router.put('/user/:mail', function (req, res, next) {
	if(req.is('application/json')){

		User.findOne({ where: {user_mail: userValidator.checkAndFormat_user_mail(req.params.mail)}})
			.then(userResult => {
				if (userResult) {

					userResult.update(userValidator.mapUser(req)).then( result => {

						res.status(200).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update user : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The user does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the user exists : "+err));
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
 * @apiGroup USER
 * @api {DELETE} /user/user/:mail Delete the user
 * @apiDescription Delete definitively the user of the database
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to delete (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/user/:mail', function (req, res, next) {

	User.destroy({ where: {user_mail: userValidator.checkAndFormat_user_mail(req.params.mail)}})
		.then( result => {
			if (result > 0) {
				res.status(204).end();
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The user does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to delete the user : "+err));
		});

});

//----------------------------------------- USER_SKILL TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError BadRequest Your request is invalid.
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup USER
 * @api {GET} /user/skills/:mail Get all skills of an user
 * @apiDescription Retrieve all skills about an users
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to retrieve for get his skills (ID)
 * @apiSuccess {String} user The user related to the next skills
 * @apiSuccess {Object[]} skills The array with all skills of the user
 * @apiSuccess {String} skills.skill_label The label given to the skill (ID)
 * @apiSuccess {String} skills.skill_name The english name of the skill to display
 * @apiSuccess {String} skills.skill_name_fr The french name of the skill to display
 * @apiSuccess {String} skills.skill_description The description of the skill
 * @apiSuccess {Date} skills.createdAt The creation date of the skill raw
 * @apiSuccess {Date} skill.updatedAt The last date update of the skill raw
 * @apiSuccess {Object} skill.user_skill *JOIN TABLE* The association table between skills and users
 * @apiSuccess {Integer} skill.user_skill.user_skill_id *JOIN TABLE* The ID of the raw
 * @apiSuccess {String}  skills.user_skill.user_skill_user *JOIN TABLE* The foreign key to user
 * @apiSuccess {String} skills.user_skill.user_skill_skill *JOIN TABLE* The foreign key to skill
 * @apiSuccess {Date}  skills.user_skill.createdAt *JOIN TABLE* The creation date of the raw
 * @apiSuccess {Date}  skills.user_skill.updatedAt *JOIN TABLE* The last date update of the raw
 * @apiUse ErrorGetGroup
 */
router.get('/skills/:mail', function(req, res, next) {



	User.findOne({where: {user_mail: req.params.mail}})
		.then(result=>{
			if(result) {
				result.getSkills()
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({user: result[0].user_skill.user_skill_user, skills: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("The user has no skills"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the user skills : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The user does not exist : "));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the user exists : "+err));
		});

});

/**
 * @apiGroup USER
 * @api {GET} /user/teams/:mail Get all skills of an user
 * @apiDescription Retrieve all teams about an users
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to retrieve for get his skills (ID)
 * @apiSuccess {String} user The user related to the next skills
 * @apiSuccess {Object[]} teams The array with all teams of the user
 * @apiSuccess {String} teams.team_label The label given to the user (ID)
 * @apiSuccess {String} teams.team_name The english name of the team to display
 * @apiSuccess {String} teams.team_name_fr The french name of the team to display
 * @apiSuccess {String} teams.team_description The description of the team
 * @apiSuccess {Date} teams.createdAt The creation date of the team raw
 * @apiSuccess {Date} teams.updatedAt The last date update of the team raw
 * @apiSuccess {Object} teams.user_team *JOIN TABLE* The association table between teams and users
 * @apiSuccess {Integer} teams.user_team.user_team_id *JOIN TABLE* The ID of the raw
 * @apiSuccess {String}  teams.user_team.user_team_user *JOIN TABLE* The foreign key to user
 * @apiSuccess {String} teams.user_team.user_team_team *JOIN TABLE* The foreign key to team
 * @apiSuccess {Date}  teams.user_team.createdAt *JOIN TABLE* The creation date of the raw
 * @apiSuccess {Date}  teams.user_team.updatedAt *JOIN TABLE* The last date update of the raw
 * @apiUse ErrorGetGroup
 */
router.get('/teams/:mail', function(req, res, next) {

	User.findOne({where: {user_mail: req.params.mail}})
		.then(result=>{
			if(result) {
				result.getTeams()
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({user: result[0].user_team.user_team_user, teams: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("The user has no team"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the user teams : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The user does not exist "));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the user exists : "+err));
		});

});		
/**
 * @apiGroup USER
 * @api {GET} /user/friends/:mail Get all friends of an user
 * @apiDescription Retrieve all friends about an users
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to retrieve his friends (ID)
 * @apiSuccess {String} user The user related to the next friends
 * @apiSuccess {Object[]} friends The array with all friend friends of the user
 * @apiSuccess {String} friends.user_mail The mail of the friend 
 * @apiSuccess {String} friends.user_name The name of the friend
 * @apiSuccess {String} friends.user_surname The surname of the friend
 * @apiSuccess {String} friends.user_nickname 
 * @apiSuccess {Object} friends.user_friend *JOIN TABLE* The association table between teams and users
 * @apiSuccess {Integer} friends.user_friend.user_friend_id *JOIN TABLE* The ID of the raw
 * @apiSuccess {String}  friends.user_friend.user_friend_user *JOIN TABLE* The foreign key to user
 * @apiSuccess {String} friends.user_friend.user_friend_friend *JOIN TABLE* The foreign key to team
 * @apiSuccess {Date}  friends.user_friend.createdAt *JOIN TABLE* The creation date of the raw
 * @apiSuccess {Date}  friens.user_friend.updatedAt *JOIN TABLE* The last date update of the raw
 * @apiUse ErrorGetGroup
 */

router.get('/friends/:mail', function(req, res, next) {
	
	User.findOne({where: {user_mail: req.params.mail}})
		.then(result=>{
			if(result) {
				result.getFriends({attributes: ['user_mail', 'user_name','user_surname','user_nickname']})
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({user: result[0].user_friend.user_friend_user, friends: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("The user has no friend"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the user friends : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The user does not exist "));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the user exists : "+err));
		});

});

/**
 * @apiGroup USER
 * @api {GET} /user/avaibilities/:mail Get all skills of an user
 * @apiDescription Retrieve all teams about an users
 * @apiParam {String} mail ``REQUIRED`` The mail of the user to retrieve for get his skills (ID)
 * @apiSuccess {String} user The user related to the next skills
 * @apiSuccess {Object[]} avaibilities The array with all teams of the user
 
 * @apiUse ErrorGetGroup
 */
router.get('/avaibilities/:mail', function(req, res, next) {

	User.findOne({where: {user_mail: req.params.mail}})
		.then(result=>{
			if(result) {
				result.getAvaibilities()
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({user: result[0].availibility_user.availibility_user_user, avaibilities: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("The user has no avaibilities"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the user avaibilities : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The user does not exist "));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the user exists : "+err));
		});
});

module.exports = router;
