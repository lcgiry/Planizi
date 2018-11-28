var express = require('express');
var router = express.Router();
const request = require("request");
var requestService = require('../services/request-service');


router.get('/editProfile', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('profile/editProfile', {user: req.session.user});
	}

});

router.post('/editProfile', function(req, res, next){
	var myURL ='http://localhost:8080/user/user/'+req.session.user.user_mail;
	var data = req.body;
	request({ url: myURL, method: 'PUT', json: data}, function(error, request, body) {
		req.session.user = body;
		res.render('profile/editProfile', {user: req.session.user});})

		

})

module.exports = router;
