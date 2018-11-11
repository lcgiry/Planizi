var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user.js');

/**
 * @apiDefine ErrorGroup
 * @apiError AuthenticationRequired You must be authenticated.
 * @apiError BadRequest Your request is invalid.
 * @apiError UserNotFound The user does not exist.
 */

/**
 * @apiGroup USER
 * @api {get} /user/:mail Get user information
 * @apiDescription Retrieve all information about an user
 * @apiParam {String} mail The mail of the user to retrieve (ID)
 * @apiSuccess {String} user_mail Mail of the user (ID)
 * @apiSuccess {String} user_name Name of the user
 * @apiSuccess {String} user_surname Surname of the user
 * @apiSuccess {String} user_nickname Nickname of the user
 * @apiSuccess {String} user_gender The gender ('m' or 'f')
 * @apiSuccess {String} user_phone Phone number of the user
 * @apiSuccess {Date} user_birthdate Birthdate of the user
 * @apiUse ErrorGroup
 */

router.get('/mail/:id', function(req, res, next) {

	User.findOne({ where: {user_mail: req.params.id}, raw: true })
		.then(userResult =>{
			if(userResult){
				res.type('json');
				res.send(userResult);
			}else{
				res.send({
					"error": "UserNotFound"
				})
			}

		})
		.catch(err => {
			console.error("ERROR - GET /mail/id >"+err)
		});

});

router.post('/mail/:id', function(req, res, next) {

	res.send({
		"response":"Success"
	});

});

module.exports = router;
