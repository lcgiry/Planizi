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
	console.log(req.body.userName)
})

module.exports = router;
