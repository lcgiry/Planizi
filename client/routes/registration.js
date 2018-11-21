var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var serverConfig = require('../config/server');
var requestService = require('../services/request-service');

router.get("/personal", function(req, res, next){
	if(req.session.userID && !req.session.user) {
		res.render("registration/registrationFormPersonal", {
			user: req.session.userID
		});
	}else{
		res.redirect("/");
	}
});

router.get("/skill", function(req, res, next){
	if(!req.session.userID && !req.session.user) {

	//API Requests promises preparation
	var SkillPromise = requestService.requestGET('/skill/skills');
	var RolePromise = requestService.requestGET('/role/roles');
	var skillList = null;
	var roleList = null;

	//API requests execution
	Promise.all([SkillPromise, RolePromise])
		.then(responses=>{
			//Check the response
			responses.forEach(response=> {
				if (requestService.isResponseJSONContentType(response)) {
					if (!requestService.isNotResponseError(response)) {
						next(new Error(response.error));
					}
				} else {
					next(new Error('Bad Content-Type'));
				}
			});
			//If its good, render the view with informations
			skillList =JSON.parse(responses[0].body).skills;
			roleList = JSON.parse(responses[1].body).roles;
			res.render('registration/registrationFormSkill', {
				skillArray: skillList,
				roleArray: roleList
			});
		})
		.catch(err=>{
			next(err);
		});

	}else{
		res.redirect("/");
	}
});

router.get("/administrative", function(req, res, next){
	if(req.session.userID && !req.session.user) {
		res.render("registration/registrationFormAdministrative");
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

	}else{
		res.redirect('/');
	}
});

router.post('/skill', function(req, res, next){

	if(req.session.userID && !req.session.user){
		var result =
	}else{
		res.redirect('/');
	}

});

router.post('/administrative', function(req, res, next){

	if(req.session.userID && !req.session.user) {

	}else{
		res.redirect('/');
	}

});

module.exports = router;