var express = require('express');
var router = express.Router();
errorResponse = require('../errors/errors-response');


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

router.get('/tests', function(req, res, next) {
	console.log(req.credentials.name);
});



module.exports = router;
