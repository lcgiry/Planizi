var express = require('express');
var router = express.Router();
const request = require("request");
const requestService = require("../services/request-service");

router.get('/myTeams', function(req, res, next) {

    if(!req.session.user){
		res.redirect('/login');
	}else{
		var teamNamesPromise = requestService.requestGET('/user/teams/'+req.session.user.user_mail)
		Promise.all([teamNamesPromise])
			.then(responses=>{
				responses.forEach(response=> {
					if (requestService.isResponseJSONContentType(response)) {
						if (!requestService.isNotResponseError(response)) {
							next(new Error(response.error));
						}
					} else {
						next(new Error('Bad Content-Type'));
					}
				});
				//Currently only one team is returned when getting /user/teams/:mail
				teamName = JSON.parse(responses[0].body).teams[0].team_label;
				var teamPromise = requestService.requestGET('/team/users/'+teamName);
				Promise.all([teamPromise])
					.then(responses=>{
						responses.forEach(response=> {
							if (requestService.isResponseJSONContentType(response)) {
								if (!requestService.isNotResponseError(response)) {
									next(new Error(response.error));
								}
							} else {
								next(new Error('Bad Content-Type'));
							}
						});
						teamInfo = JSON.parse(responses[0].body);
						res.render('teams/myTeam', {
							teamInfo: teamInfo,
							user: 'req.session.user'
						});
					})
			})
		
		
		// res.render('teams/myTeam', {user: 'req.session.user'});
	}
});

router.get('/configTeams', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		var TeamPromise = requestService.requestGET('/team/teams');
		Promise.all([TeamPromise])
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
				teamList = JSON.parse(responses[0].body).teams;
				res.render('teams/configTeams', {
					teamArray: teamList
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});
router.post('/newTeam', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/team/team';
		var data = req.body;
		request({ url: myURL, method: 'POST', json: data}, function(error, request, body) {})		
		res.redirect('./showTeams/');	
			
		
	}
});

router.post('/editTeam/:id', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/team/team/'+req.params.id;
		var data = req.body;
		request({ url: myURL, method: 'PUT', json: data}, function(error, request, body) {})		
		res.redirect('../configTeams/');	
			
		
	}
});

router.get('/delTeam/:id', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/team/team/'+req.params.id;
		request({ url: myURL, method: 'delete'}, function(error, request, body) {})		
		res.redirect('../showTeams/');	
			
		
	}
});

router.get('/showTeam/:id', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		var TeamUsersPromise = requestService.requestGET('/team/users/'+req.params.id);
		var UsersPromise = requestService.requestGET('/user/users/');
		Promise.all([TeamUsersPromise, UsersPromise])
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
				teamUsersList = JSON.parse(responses[0].body).users;
				team = JSON.parse(responses[0].body).team;
				usersList = JSON.parse(responses[1].body).users;
				res.render('teams/showTeam', {
					teamUsersArray: teamUsersList,
					team : team,
					usersArray : usersList
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});

/*router.get('/showTeams', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		var TeamUsersPromise = requestService.requestGET('/team/users/'+req.params.id);
		var UsersPromise = requestService.requestGET('/user/users/');
		Promise.all([TeamUsersPromise, UsersPromise])
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
				teamUsersList = JSON.parse(responses[0].body).users;
				team = JSON.parse(responses[0].body).team;
				usersList = JSON.parse(responses[1].body).users;
				res.render('teams/showTeam', {
					teamUsersArray: teamUsersList,
					team : team,
					usersArray : usersList
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});*/

router.post('/:team/newTeamUser/', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/user/team/';
		var data = req.body;
		console.log(data);
		request({ url: myURL, method: 'POST', json: data}, function(error, request, body) {console.log(body)});		
		res.redirect('/teams/showTeam/'+req.params.team);	
			
		
	}
});

module.exports = router;
