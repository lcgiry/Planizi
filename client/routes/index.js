var express = require('express');
var router = express.Router();
const request = require('request');


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

/* GET home page. */
router.get('/', function(req, res, next) {

	//if(req.session.user){
	//	res.redirect('/login');
	//}else{
		res.redirect('/dashboard');
	//}

});

module.exports = router;
