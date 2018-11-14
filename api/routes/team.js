var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

var skillValidator = require('../services/validators/team-validator');
var errorResponse = require('../errors/errors-response');
const Team = sequelize.import('../models/team.js');
const User = sequelize.import('../models/user.js');
const User_Team = sequelize.import('../models/user_team.js');

//----------------------------------------- SKILL TABLE
/**
 * @apiDefine ErrorGetGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError InternalServerError Internal problem..
 * @apiError UserNotFound The user does not exist.
 */
/**
 * @apiGroup SKILL
 * @api {GET} /skill/skills Get all skills
 * @apiDescription Retrieve all information about all skills inserted
 * @apiSuccess {Object[]} skills The array with all users
 * @apiSuccess {String} skills.skill_label The mail of the user to retrieve (ID)
 * @apiSuccess {String} skills.skill_name The english name of the skill to display
 * @apiSuccess {String} skills.skill_name_fr The french name of the skill to display
 * @apiSuccess {String} skills.skill_description The description of the skill
 * @apiSuccess {Date} cratedAt The creation date of the skill raw
 * @apiSuccess {Date} updatedAt The last date update of the skill raw
 * @apiUse ErrorGetGroup
 */
router.get('/skills', function(req, res, next) {

	Skill.findAll({ raw: true })
		.then(skillResult => {
			if (skillResult) {
				res.type('json');
				res.send({ skills : skillResult });
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('There is no skills in database'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError('Problem to execute the request : '+err));
		});

});

/**
 * @apiGroup SKILL
 * @api {GET} /skill/skill/:label Get one skill
 * @apiDescription Retrieve all information about a skill
 * @apiParam {String} label ``REQUIRED`` The label given to the skill (ID)
 * @apiSuccess {String} skill_label The mail of the user to retrieve (ID)
 * @apiSuccess {String} skill_name The english name of the skill to display
 * @apiSuccess {String} skill_name_fr The french name of the skill to display
 * @apiSuccess {String} skill_description The description of the skill
 * @apiSuccess {Date} cratedAt The creation date of the skill raw
 * @apiSuccess {Date} updatedAt The last date update of the skill raw
 * @apiUse ErrorGetGroup
 */
router.get('/skill/:label', function(req, res, next) {

	Skill.findOne({ where: { skill_label : skillValidator.checkAndFormat_skill_label(req.params.label) }, raw: true })
		.then(skillResult => {
			if (skillResult) {
				res.type('json');
				res.send(skillResult);
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The skill does not exist'));
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
 * @apiGroup SKILL
 * @api {POST} /skill/skill/ Post a new skill
 * @apiDescription Create a new skill in database
 * @apiParam (Body) {String} skill_label ``REQUIRED`` The label given to the skill (ID)
 * @apiParam (Body) {String} skill_name ``REQUIRED`` The english name of the skill to display
 * @apiParam (Body) {String} skill_name_fr ``REQUIRED`` The french name of the skill to display
 * @apiParam (Body) {String} skill_description The description of the skill
 * @apiSuccess (Success 201) {String} skill_label The skill label of the new skill.
 * @apiUse ErrorPostGroup
 */
router.post('/skill/', function(req, res, next) {

	if(req.is('application/json')){

		var newSkillPromise = Skill.build(skillValidator.mapSkill(req));

		Skill.findOne({ where: { skill_label : skillValidator.checkAndFormat_skill_label(req.body.skill_label) } })
			.then( result =>{
				//If skill does not exist yet
				if(result === null){
					//Save the new skill
					Promise.all([newSkillPromise.save()])
						.then( result => {
							res.status(201);
							res.send({
								"skill_label": result[0].skill_label
							});
						})
						.catch( err =>{
							res.status(500);
							res.send(errorResponse.InternalServerError(err.message));
						});
				//If skill exists yet
				}else{
					res.status(404);
					res.send(errorResponse.RessourceAlreadyExist( "The user is yet exists"));
				}
			})
			.catch( err =>{
				res.send(errorResponse.InternalServerError("Problem to check if the skill exists : "+err));
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
 * @apiGroup SKILL
 * @api {PUT} /skill/skill/:label Update a skill
 * @apiDescription Update a skill
 * @apiParam {String} label ``REQUIRED`` The label of the skill (ID)
 * @apiParam (Body) {String} skill_label The label given to the skill (ID)
 * @apiParam (Body) {String} skill_name The english name of the skill to display
 * @apiParam (Body) {String} skill_name_fr The french name of the skill to display
 * @apiParam (Body) {String} skill_description The description of the skill
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorPostGroup
 */
router.put('/skill/:label', function (req, res, next) {

	if(req.is('application/json')){

		Skill.findOne({  where: { skill_label : skillValidator.checkAndFormat_skill_label(req.params.label) } })
			.then( skillResult => {
				if (skillResult) {

					skillResult.update(skillValidator.mapSkill(req)).then( result => {
						res.status(204).end();
					}).catch( err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to update skill : "+err));
					});

				} else {
					res.status(404);
					res.send(errorResponse.RessourceNotFound('The skill does not exist'));
				}
			})
			.catch(err => {
				res.status(500);
				res.send(errorResponse.InternalServerError("Problem to check if the skill exists : "+err));
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
 * @apiGroup SKILL
 * @api {DELETE} /skill/skill/:label Delete the skill
 * @apiDescription Delete definitively the skill of the database
 * @apiParam {String} label ``REQUIRED`` The label of the skill (ID)
 * @apiSuccess (Success 204) NOCONTENT *No content sent*
 * @apiUse ErrorDeleteGroup
 */
router.delete('/skill/:label', function (req, res, next) {

	Skill.destroy({ where: {skill_label: skillValidator.checkAndFormat_skill_label(req.params.label)}})
		.then( result => {
			if (result > 0) {
				res.status(204).end();
			} else {
				res.status(404);
				res.send(errorResponse.RessourceNotFound('The skill does not exist'));
			}
		})
		.catch(err => {
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to delete the skill : "+err));
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
 * @apiGroup SKILL
 * @api {GET} /skill/users/:label Get all users linked to a skill
 * @apiDescription Retrieve all users linked linked to a particular skill
 * @apiParam {String} label ``REQUIRED`` The label given to the skill (ID)
 * @apiSuccess {String} skill The skill related to the next users
 * @apiSuccess {Object[]} users The array with all users linked to the skill
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
 * @apiSuccess {Object} users.user_skill *JOIN TABLE* The association table between skills and users
 * @apiSuccess {Integer} users.user_skill.skill_id *JOIN TABLE* The ID of the raw
 * @apiSuccess {String}  users.user_skill.skill_user *JOIN TABLE* The foreign key to user
 * @apiSuccess {String} users.user_skill.skill_skill *JOIN TABLE* The foreign key to skill
 * @apiSuccess {Date}  users.user_skill.cratedAt *JOIN TABLE* The creation date of the raw
 * @apiSuccess {Date}  users.user_skill.updatedAt *JOIN TABLE* The last date update of the raw
 * @apiUse ErrorGetGroup
 */
router.get('/users/:label', function(req, res, next) {

	User.belongsToMany(Skill, {through: User_Skill, foreignKey: 'user_skill_user'});
	Skill.belongsToMany(User, {through: User_Skill, foreignKey: 'user_skill_skill'});

	Skill.findOne({where: {skill_label: req.params.label}})
		.then(skillResult=>{
			if(skillResult) {
				skillResult.getUsers()
					.then(result => {

						if(result[0]){
							res.status(200);
							res.send({skill: result[0].user_skill.user_skill_skill, users: result});
						}else{
							res.status(404);
							res.send(errorResponse.RessourceNotFound("The skill is valid by no user"));
						}
					})
					.catch(err => {
						res.status(500);
						res.send(errorResponse.InternalServerError("Problem to retrieve the users for the skill : "+err));
					});
			}else{
				res.status(404);
				res.send(errorResponse.RessourceNotFound("The skill does not exist : "+err));
			}
		})
		.catch(err=>{
			res.status(500);
			res.send(errorResponse.InternalServerError("Problem to check if the skill exists : "+err));
		});

});



module.exports = router;
