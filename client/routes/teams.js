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

router.get('/ShowTeams', function(req, res, next) {
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

module.exports = router;
