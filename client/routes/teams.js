var express = require('express');
var router = express.Router();
const request = require("request");
const requestService = require("../services/request-service");

router.get('/myTeams', function(req, res, next) {

    if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('teams/myTeam', {user: 'req.session.user'});
	}
});

router.get('/showTeams', function(req, res, next) {
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
				res.render('teams/showTeams', {
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
		res.redirect('../showTeams/');	
			
		
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


module.exports = router;
