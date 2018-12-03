var express = require('express');
var router = express.Router();
const requestService = require("../services/request-service");


router.get('/new-task', function(req, res, next) {
	if(req.session.user){
		res.redirect('/login');
	}else{

		var SkillPromise = requestService.requestGET('/skill/skills');
		var RolePromise = requestService.requestGET('/role/roles');
		var UserPromise = requestService.requestGET('/user/users');
		var TeamPromise = requestService.requestGET('/team/teams');
		var skillList = null;
		var roleList = null;
		var userList = null;
		var teamList = null;

		Promise.all([SkillPromise, RolePromise, UserPromise, TeamPromise])
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
				userList =JSON.parse(responses[2].body).users;
				teamList = JSON.parse(responses[3].body).teams;
				res.render('tasks/new-task', {
					skillArray: skillList,
					roleArray: roleList,
					teamArray: teamList,
					userArray: userList
				});
			})
			.catch(err=>{
				next(err);
			});
	}

});

router.get('/new-task/add-shift', function(req, res, next) {
	if(req.session.user){
		res.redirect('/login');
	}else{

		var SkillPromise = requestService.requestGET('/skill/skills');
		var RolePromise = requestService.requestGET('/role/roles');
		var UserPromise = requestService.requestGET('/user/users');
		var TeamPromise = requestService.requestGET('/team/teams');
		var skillList = null;
		var roleList = null;
		var userList = null;
		var teamList = null;

		Promise.all([SkillPromise, RolePromise, UserPromise, TeamPromise])
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
				userList =JSON.parse(responses[2].body).users;
				teamList = JSON.parse(responses[3].body).teams;
				res.render('tasks/shift-edit', {
					skillArray: skillList,
					roleArray: roleList,
					teamArray: teamList,
					userArray: userList
				});
			})
			.catch(err=>{
				next(err);
			});
	}

});

router.post('/new-task/add-shift', function(req, res, next) {
	if(req.session.user){
		res.redirect('/login');
	}else{
		console.log(req.body);
	}

});

router.post('/shift-edit/add-need-people-generic', function (req, res, next) {
	console.log(req.body);
	res.render('tasks/shift-sumup-panel-people-generic', {skills: req.body.skill_need, trust: req.body.trust_need, team: req.body.team_need, role: req.body.role_need, number: req.body.number_people_need});
});

router.post('/shift-edit/add-need-people-specific', function (req, res, next) {
	console.log(req.body);
	res.render('tasks/shift-sumup-panel-people-specific', {people: req.body.people});
});


router.get('/tasks', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{

		res.render('tasks/list-tasks', {
			tasks: [
				{task_label: 'Sortir les poubelles', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les avions', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les serviettes', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les animaux', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les pantalons', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les écrans', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les mobilettes', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les esquimaux', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les couverts', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
			]
		});
	}

});

module.exports = router;
