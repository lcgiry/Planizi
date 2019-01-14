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
router.get('/my-availabilities', function(req, res, next) {

	if(req.session.user){
		res.redirect('/login');
	}else{
		var AvailabilitiesPromise = requestService.requestGET('/user/availabilities/'+'john71570@gmail.com');
		var availibilitiesList = null;

		Promise.all([AvailabilitiesPromise])
			.then(responses =>{
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
				availibilitiesList = JSON.parse(responses[0].body).availabilities;
				var calendarEvents = [];
				availibilitiesList.forEach(function (availability){
					var className;
					if(availability.availability_user.availability_user_available == 1){
						if(availability.availability_user.availability_user_assignment == 1){
							className = "calendar-assigned-yes";
						}else{
							className = "calendar-availability-yes";
						}
					}else{
						className = "calendar-availability-no";
					}
					calendarEvents.push({
						title:'',
						start: availability.shift_unit_start,
						end: availability.shift_unit_end,
						id: availability.availability_user.availability_user_id,
						available: availability.availability_user.availability_user_available,
						assigned: availability.availability_user.availability_user_assignment,
						className: className
					});
				});

				res.render('availabilities/availabilities-user-page', {
					calendarAvailabilities: calendarEvents
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});

router.get('/my-availabilities/ajax', function(req, res, next) {

	if(req.session.user){
		res.redirect('/login');
	}else{
		var AvailabilitiesPromise = requestService.requestGET('/user/availabilities/'+'john71570@gmail.com');
		var availibilitiesList = null;

		Promise.all([AvailabilitiesPromise])
			.then(responses =>{
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
				availibilitiesList = JSON.parse(responses[0].body).availabilities;
				var calendarEvents = [];
				availibilitiesList.forEach(function (availability){
					var className;
					if(availability.availability_user.availability_user_available == 1){
						if(availability.availability_user.availability_user_assignment == 1){
							className = "calendar-assigned-yes";
						}else{
							className = "calendar-availability-yes";
						}
					}else{
						className = "calendar-availability-no";
					}
					calendarEvents.push({
						title:'',
						start: availability.shift_unit_start,
						end: availability.shift_unit_end,
						id: availability.availability_user.availability_user_id,
						available: availability.availability_user.availability_user_available,
						assigned: availability.availability_user.availability_user_assignment,
						className: className
					});
				});

				res.send(calendarEvents);
			})
			.catch(err=>{
				next(err);
			});
	}
});

router.post('/my-availabilities/ajax', function(req, res, next) {

	if(req.session.user){
		res.redirect('/login');
	}else{

		var AvailabilitiesPromise = requestService.requestPUT('/user/availabilities'+'/john71570@gmail.com', {availability_user_id: req.body.id, availability_user_available: req.body.available});

		Promise.all([AvailabilitiesPromise])
			.then(responses =>{
				res.send('OK');
			})
			.catch(err=>{
				next(err);
			});

	}
});

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


