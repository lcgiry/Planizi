var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user');

router.get("/personal", function(req, res, next){
	if(req.session.userID) {
		res.render("registrationFormPersonal", {
			user: req.session.userID
		});
	}else{
		res.redirect("/login");
	}
});

router.post("/", function(req, res, next){

});

router.post('/personal', function(req, res, next){
	if(req.session.userID){

		let userBirthdateForm = req.body.userBirthdate.split('/');
		let userBirthdate = new Date();
		userBirthdate.setFullYear(userBirthdateForm[2]);
		userBirthdate.setMonth(userBirthdateForm[1]-1);
		userBirthdate.setDate(userBirthdateForm[0]);

		const newUser = User.build({
			user_birthdate: userBirthdate,
			user_name: req.body.userName,
			user_surname: req.body.userSurname,
			user_mail: req.session.userID,
			user_nickname: req.body.userNickname,
			user_description: req.body.userDescription,
			user_phone: req.body.userPhone,
			user_gender: req.body.userGender
		})
			.save()
			.then(function(){
				console.log('New user added in db');
				res.redirect('/tests');
			})
			.catch(function(err){
				console.log('Error insert in db :' +err);
				res.render('/error');
			});
	}else{
		console.log('Session not initialized');
		res.redirect('/login');
	}
});

router.post('/skill', function(req, res, next){
	console.log('FORM2 : '+req.body);
});

router.post('/administrative', function(req, res, next){
	console.log('FORM3 : '+req.body);
});

module.exports = router;