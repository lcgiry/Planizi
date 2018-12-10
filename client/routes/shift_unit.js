var express = require('express');
var router = express.Router();
const request = require("request");
var moment = require('moment');
const requestService = require("../services/request-service");

router.get('/addShiftUnit', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('shift_unit/addShiftUnit', {shift_unit: {"shift_unit_start": moment("01/01/2018 08:00",'DD/MM/YYYY HH:mm').toDate(), "shift_unit_end":moment("01/01/2018 10:00",'DD/MM/YYYY HH:mm').toDate(), "shift_unit_point":10}, moment: moment});
	}
});

router.post('/addShiftUnit', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/shift_unit/shift_unit/';
		req.body.shift_unit_start = moment(req.body.shift_unit_start, 'DD/MM/YYYY-HH:mm').format('YYYY-MM-DD HH:mm:ss');
		req.body.shift_unit_end = moment(req.body.shift_unit_end, 'DD/MM/YYYY-HH:mm').format('YYYY-MM-DD HH:mm:ss');
		var data = req.body;
		request({ url: myURL, method: 'POST', json: data}, function(error, request, body) {					
			if(!body.code){
				res.redirect('./showShiftUnit');
			} else {
				res.redirect('./showShiftUnit');
			}
		})
	}
});

router.get('/showShiftUnit', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var ShiftUnitPromise = requestService.requestGET('/shift_unit/all');

		Promise.all([ShiftUnitPromise])
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
				shiftUnitList =JSON.parse(responses[0].body).shift_units;
				res.render('shift_unit/showShiftUnit', {
					shiftUnitArray: shiftUnitList,
					shift_unit: {
							"shift_unit_start": moment("01/01/2018 08:00",'DD/MM/YYYY HH:mm').toDate(), 								"shift_unit_end": moment("01/01/2018 10:00",'DD/MM/YYYY HH:mm').toDate(), 								"shift_unit_point":10}, 
					moment:moment
				});
			})
			.catch(err=>{
				next(err);
			});
	}
});

router.get('/delShiftUnit/:id', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/shift_unit/shift_unit/'+req.params.id;
		
		request({ url: myURL, method: 'DELETE'}, function(error, request, body) {})		
		res.redirect('../showShiftUnit/');	
			
		
	}
});

router.post('/editShiftUnit/:id', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/shift_unit/shift_unit/'+req.params.id;
		req.body.shift_unit_start = moment(req.body.shift_unit_start, 'DD/MM/YYYY-HH:mm').format('YYYY-MM-DD HH:mm:ss');
		req.body.shift_unit_end = moment(req.body.shift_unit_end, 'DD/MM/YYYY-HH:mm').format('YYYY-MM-DD HH:mm:ss');
		var data = req.body;
		request({ url: myURL, method: 'PUT', json: data}, function(error, request, body) {})		
		res.redirect('../showShiftUnit/');	
			
		
	}
});



module.exports = router;
