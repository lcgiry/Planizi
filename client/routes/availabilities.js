var express = require('express');
var router = express.Router();
var moment = require('moment');

const request = require("request");


router.get('/addAvailabilities', function(req, res, next) {

    if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('availabilities/addAvailabilities', {user: 'req.session.user'});
	}
});

router.get('/viewAvailabilities', function(req, res, next) {

	// if(!req.session.user){
    // // if(!req.session.user){
	// 	res.redirect('/login');
	// }else{
		res.render('availabilities/viewAvailabilities');// ,{user: 'req.session.user'});
	// }
});

router.get('/addShiftUnit', function(req, res, next) {
    if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('availabilities/addShiftUnit', {shift_unit: {"shift_unit_start": moment("01/01/2018 08:00",'DD/MM/YYYY HH:mm').toDate(), "shift_unit_end":moment("01/01/2018 10:00",'DD/MM/YYYY HH:mm').toDate(), "shift_unit_point":10}, moment: moment});
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
			console.log(body);			
			if(!body.code){
				res.redirect('/showShiftUnit');
			} else {
				res.status(500);
				res.send("error to post new shift unit");
			}
		})
	}
});

router.get('/showShiftUnit', function(req, res, next) {
    	if(!req.session.user){
		res.redirect('/login');
	}else{
		var myURL ='http://localhost:8080/shift_unit/all';
		
		request({ url: myURL, method: 'GET'}, function(error, request, body) {		
			
			if(!body.code){
				console.log(JSON.parse(body).shift_units);
				res.render('availabilities/showShiftUnit', {shiftUnitArray:JSON.parse(body).shift_units, moment:moment});
			} else {
				res.status(500);
				res.send("error to post new shift unit");
			}
		})
	}
});
module.exports = router;
