var express = require('express');
var router = express.Router();
const request = require("request");


router.get('/', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('dashboard');
	}

});

module.exports = router;
