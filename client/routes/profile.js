var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const request = require("request");
var requestService = require('../services/request-service');
=======
const request = require('request');
>>>>>>> 9958f6766a8283787b34a52a240c56d5695f0e4d


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
