var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user.js');

/* GET home page. */
router.get('/login', function(req, res, next) {
	if(req.session.user){
		res.redirect('/');
	}else{
		res.render('login');
	}
});

router.get('/logout', function(req, res, next) {
	req.session.destroy();
	res.redirect('/');
});

router.get('/', function(req, res, next) {
	if(!req.session.userID){
		res.redirect('/login');
	}else{
		res.render('test');
	}
});

router.post('/tests', function(req, res, next) {
	console.log(req.body.access_token);
});



module.exports = router;
