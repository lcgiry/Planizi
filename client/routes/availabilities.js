var express = require('express');
var router = express.Router();
var moment = require('moment');
const requestService = require("../services/request-service");


router.get('/addAvailabilities', function(req, res, next) {

	//Check if user logged in or not
    if(req.session.user){
		res.redirect('/login');
	}else{
		var allShifts = requestService.requestGET('/shift_unit/all');

		Promise.all([allShifts])
			.then(response=>{
				console.log('@@@ Shifts :', response.body)
			})

		res.render('availabilities/addAvailabilities', {user: 'req.session.user'});
		console.log('@@@@@'+req.body)
	}



});

// router.get('/noAvailabilites', function(req, res, next){
// 	//Est-ce bien utile de vérifier l'authentification sur une page de la sorte ?
// 	 if(!req.session.user){
// 		res.redirect('/login');
// 	}else{
// 		res.render('availabilities/noAvailabilities', {user: 'req.session.user'});
// 	}
// });

router.get('/viewAvailabilities', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{
		//get the availabilities
		var myAvailabilitiesPromise = requestService.requestGET('/user/avaibilities/'+req.session.user.user_mail);
		console.log('@@@@ 0');
		Promise.all([myAvailabilitiesPromise])
			.then (response=>{
				console.log('@@@@ 1');
			})
			.catch(err=>{
				//Check if the user has no availability registered yet.
				if(err.response.statusCode == '404'){
					console.log('@@@@ No availabilities')
					res.render('availabilities/noAvailabilities');// ,{user: 'req.session.user'});
				}
				console.log(err.response.statusCode);
				// next(err);
			});

	}
});


module.exports = router;


