var express = require('express');
var router = express.Router();
const request = require("request");
const requestService = require("../services/request-service");

router.get('/mySkills', function(req, res, next) {

    if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('skills/myskills', {user: 'req.session.user'});
	}
});

router.get('/configSkills', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		var SkillPromise = requestService.requestGET('/skill/skills');
		Promise.all([SkillPromise])
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
				skillList = JSON.parse(responses[0].body).skills;
				res.render('skills/configSkills', {
					skillArray: skillList
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});
router.post('/newSkill', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/skill/skill';
		var data = req.body;
		request({ url: myURL, method: 'POST', json: data}, function(error, request, body) {})		
		res.redirect('./configSkills/');	
			
		
	}
});

router.post('/editSkill/:id', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/skill/skill/'+req.params.id;
		var data = req.body;
		console.log(data)
		request({ url: myURL, method: 'PUT', json: data}, function(error, request, body) {console.log(body)})		
		res.redirect('../configSkills/');	
			
		
	}
});

router.get('/delSkill/:id', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/skill/skill/'+req.params.id;
		request({ url: myURL, method: 'delete'}, function(error, request, body) {})		
		res.redirect('../configSkills/');	
			
		
	}
});

router.get('/showSkill/:id', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		var UserSkillPromise = requestService.requestGET('/skill/users/'+req.params.id);
		var UsersPromise = requestService.requestGET('/user/users/');
		Promise.all([UserSkillPromise, UsersPromise])
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
				UserSkillList = JSON.parse(responses[0].body).users;
				skill = JSON.parse(responses[0].body).skill;
				usersList = JSON.parse(responses[1].body).users;
				res.render('teams/showTeam', {
					userSkillArray: UserSkillList,
					skill : skill,
					usersArray : usersList
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});

router.get('/:user/delSkill/:skill', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/user/skill/';
		var data = {"user_mail": req.params.user, "skill_label": req.params.skill};
		request({ url: myURL, method: 'delete', json: data}, function(error, request, body) {})		
		res.redirect('/dashboard/');	
			
		
	}
});

router.post('/:user/newSkill/', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/user/skill/';
		var data = req.body;
		request({ url: myURL, method: 'post', json: data}, function(error, request, body) {})		
		res.redirect('/dashboard/');	
			
		
	}
});


module.exports = router;
