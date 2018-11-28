var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user');
const Skill = sequelize.import('../models/skill');
const Role = sequelize.import('../models/role');
const UserSkill = sequelize.import('../models/user_skill');

router.get("/personal", function(req, res, next){
	if(req.session.userID && !req.session.user) {
		res.render("registrationFormPersonal", {
			user: req.session.userID
		});
	}else{
		res.redirect("/");
	}
});

router.get("/skill", function(req, res, next){
	if(req.session.userID && !req.session.user) {

		var skillPromise = Skill.findAll({order: ['skill_name']});
		var rolePromise = Role.findAll();

		Promise.all([skillPromise, rolePromise])
			.then( results => {
				res.render("registrationFormSkill", {
					skillArray: results[0],
					roleArray: results[1]
				});
			})
			.catch( err => {
				console.error('Cannot find in database :' +err);
			});
	}else{
		res.redirect("/");
	}
});

router.get("/administrative", function(req, res, next){
	if(req.session.userID && !req.session.user) {
		res.render("registrationFormAdministrative");
	}else{
		res.redirect("/");
	}
});

router.get("/cancel", function(req, res, next){
	req.session.destroy();
	res.redirect("/");
});

router.post('/personal', function(req, res, next){
	if(req.session.userID && !req.session.user){
		var regexp =  new RegExp("[0-9]{1,2}[/]{1}[0-9]{1,2}[/]{1}[0-9]{4}");

		//Check birthdate format
		let userBirthdate = new Date();
		if( regexp.test(req.body.userBirthdate) ){
			let userBirthdateForm = req.body.userBirthdate.split('/');
			userBirthdate.setFullYear(userBirthdateForm[2]);
			userBirthdate.setMonth(userBirthdateForm[1]-1);
			userBirthdate.setDate(userBirthdateForm[0]);
		}else{
			userBirthdate.setFullYear(1900);
			userBirthdate.setMonth(0);
			userBirthdate.setDate(1);
		}

		//Build User object and save it in database, then redirect to home page
		User.build({
			user_birthdate: userBirthdate,
			user_name: req.body.userName.charAt(0).toUpperCase()+req.body.userName.substring(1).toLowerCase(),
			user_surname: req.body.userSurname.charAt(0).toUpperCase()+req.body.userSurname.substring(1).toLowerCase(),
			user_mail: req.session.userID,
			user_nickname: req.body.userNickname,
			user_description: req.body.userDescription,
			user_phone: req.body.userPhone,
			user_gender: req.body.userGender
		})
			.save()
			.then(function(){
				console.info('New user added in database');
				res.redirect('/registration/skill');
			})
			.catch(function(err){
				console.error('Cannot insert in database :' +err);
				req.session.destroy();
				res.render('/error');
			});

	}else{
		console.log('Session not initialized');
		res.redirect('/');
	}
});

router.post('/skill', function(req, res, next){
	if(req.session.userID && !req.session.user){

		var userExperience = req.body.userExperience.substring(0, 255);
		var userIncapacity = req.body.userIncapacity.substring(0, 255);
		var userSkill = req.body.userSkills;
		var userRole = req.body.userRole;

		var userUpdatePromise = sequelize.query("UPDATE user SET user_experience = ?, user_incapacity = ?, user_role = ? WHERE user.user_mail = ?", { replacements: [userExperience, userIncapacity, userRole, req.session.userID] });
		var userSkillPromiseClear = sequelize.query("DELETE FROM user_skill WHERE user_skill.user_skill_user = ?", { replacements: [req.session.userID] });
		var userSkillPromiseAutoincrement = sequelize.query("ALTER TABLE user_skill AUTO_INCREMENT = 1");
		var userSkillPromiseAdd = [new Promise( (resolve, reject) => {resolve(1); } )];

		if(userSkill.length>=1){
			userSkill.forEach( (skill, index) => {
				userSkillPromiseAdd[index] = UserSkill.create(
					{
						user_skill_user: req.session.userID,
						user_skill_skill: skill
					},
					{
						isNewRecord: false
					}
				);
			});
		}

		Promise.all([userUpdatePromise, userSkillPromiseClear, userSkillPromiseAutoincrement, userSkillPromiseAdd])
			.then( results => {
				res.redirect("/registration/administrative")
			})
			.catch( err => {
				console.error(err);
				req.session.destroy();
				next(err);
			});

	}else{
		res.redirect('/');
	}
});

router.post('/administrative', function(req, res, next){
	var uploadFilePromises = [];

	if(req.session.userID && !req.session.user) {

		var userUpdatePromise = [];

		//Check SSN field
		if(req.body.userSocialSecurityNumber){
			req.body.userSocialSecurityNumber.substring(0, 45);
			userUpdatePromise.push(sequelize.query("UPDATE user SET user_social_security_card_number = ? WHERE user.user_mail = ?", { replacements: [req.body.userSocialSecurityNumber.substring(0, 45), req.session.userID] }));
		}
		//Check Teeshirt size field
		if(req.body.userTeeshirtSize){
			userUpdatePromise.push(sequelize.query("UPDATE user SET user_teeshirt_size = ? WHERE user.user_mail = ?", { replacements: [req.body.userTeeshirtSize, req.session.userID] }));
		}
		//Check and save SSN file
		if (req.files.userSocialSecurityCard) {
			if(!req.files.userSocialSecurityCard.truncated) {
				var pathFile = __dirname + '/../uploaded-documents/user-ssn/user_ssn_' + req.session.userID + req.files.userSocialSecurityCard.name.match(/([.][a-zA-Z0-9]+){1}$/)[0];
				userUpdatePromise.push(sequelize.query("UPDATE user SET user_social_security_card_file = ? WHERE user.user_mail = ?", { replacements: ['/uploaded-documents/user-ssn/user_ssn_' + req.session.userID + req.files.userSocialSecurityCard.name.match(/([.][a-zA-Z0-9]+){1}$/)[0], req.session.userID] }));
				uploadFilePromises.push(new Promise((resolve, reject) => {
					req.files.userSocialSecurityCard.mv(pathFile, function (err) {
						if (!err) {
							resolve();
						} else {
							reject(err);
						}
					});
				}));
			}
		}
		//Check and save CV file
		if (req.files.userCV) {
			if (!req.files.userCV.truncated){
				var pathFile = __dirname + '/../uploaded-documents/user-cv/user_cv_' + req.session.userID + req.files.userCV.name.match(/([.][a-zA-Z0-9]+){1}$/)[0];
				userUpdatePromise.push(sequelize.query("UPDATE user SET user_cv_file = ? WHERE user.user_mail = ?", { replacements: ['/uploaded-documents/user-cv/user_cv_' + req.session.userID + req.files.userCV.name.match(/([.][a-zA-Z0-9]+){1}$/)[0], req.session.userID] }));
				uploadFilePromises.push(new Promise((resolve, reject) => {
					req.files.userCV.mv(pathFile, function (err) {
						if(!err){
							resolve();
						}else{
							reject(err);
						}
					});
				}));
			}
		}
		//Check and save Identity file
		if (req.files.userIdentityCard) {
			if (!req.files.userIdentityCard.truncated) {
				var pathFile = __dirname + '/../uploaded-documents/user-identity/user_identitv_' + req.session.userID + req.files.userIdentityCard.name.match(/([.][a-zA-Z0-9]+){1}$/)[0];
				userUpdatePromise.push(sequelize.query("UPDATE user SET user_identity_card_file = ? WHERE user.user_mail = ?", { replacements: ['/uploaded-documents/user-identity/user_identitv_' + req.session.userID + req.files.userIdentityCard.name.match(/([.][a-zA-Z0-9]+){1}$/)[0], req.session.userID] }));
				uploadFilePromises.push(new Promise((resolve, reject) => {
					req.files.userIdentityCard.mv(pathFile, function (err) {
						if (!err) {
							resolve();
						} else {
							reject(err);
						}
					});
				}));
			}
		}
		//Check and save driver licence file
		if (req.files.userDriverLicence) {
			if (!req.files.userDriverLicence.truncated) {
				var pathFile = __dirname + '/../uploaded-documents/user-driver-licence/user_driver_licence_' + req.session.userID + req.files.userDriverLicence.name.match(/([.][a-zA-Z0-9]+){1}$/)[0];
				userUpdatePromise.push(sequelize.query("UPDATE user SET user_driver_licence_file = ? WHERE user.user_mail = ?", { replacements: ['/uploaded-documents/user-driver-licence/user_driver_licence_' + req.session.userID + req.files.userDriverLicence.name.match(/([.][a-zA-Z0-9]+){1}$/)[0], req.session.userID] }));
				uploadFilePromises.push(new Promise((resolve, reject) => {
					req.files.userDriverLicence.mv(pathFile, function (err) {
						if (!err) {
							resolve();
						} else {
							reject(err);
						}
					});
				}));
			}
		}

		//Do really the promises
		Promise.all(userUpdatePromise, uploadFilePromises).then( ()=> {console.info('Files saved'); res.redirect('/tests') }).catch( (err)=>{console.error(err); res.redirect('/')} );

	}else{
		res.redirect('/');
	}

});

module.exports = router;