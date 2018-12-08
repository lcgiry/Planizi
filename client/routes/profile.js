var express = require('express');
var router = express.Router();
const request = require("request");
var requestService = require('../services/request-service');
var moment = require('moment');


router.get('/editProfile', function(req, res, next) {
	if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('profile/editProfile', {user: req.session.user, moment: moment});
	}
});

router.get('/', function(req, res, next) {
	if(!req.session.user){
		res.redirect('/login');
	}else{
	res.render('userProfile', {user: req.session.user, moment: moment});
	}
});


router.post('/editProfile', function(req, res, next){
	var myURL ='http://localhost:8080/user/user/'+req.session.user.user_mail;
	req.body.user_birthdate = moment(req.body.user_birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD');
	var data = req.body;
	request({ url: myURL, method: 'PUT', json: data}, function(error, request, body) {		
		req.session.user = req.body;
		res.render('profile/editProfile', {user: req.session.user, moment: moment});
		})
})

module.exports = router;
