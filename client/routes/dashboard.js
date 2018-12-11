var express = require('express');
var router = express.Router();
const request = require('request');
const requestService = require("../services/request-service");

router.get('/', function(req, res, next) {
	if(!req.session.user){
		res.redirect('/login');
	}else{
		var mySkillsPromise = requestService.requestGET('/user/skills/'+req.session.user.user_mail);
		var SkillPromise = requestService.requestGET('/skill/skills/');
		Promise.all([mySkillsPromise, SkillPromise])
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
				mySkillsList =JSON.parse(responses[0].body).skills;
				SkillList =JSON.parse(responses[1].body).skills;
				res.render('dashboard', { 'user':req.session.user, 
						mySkillsArray : mySkillsList, 
						SkillArray : SkillList });
			})
			.catch(err=>{
				next(err);
			});
	}

});

module.exports = router;
