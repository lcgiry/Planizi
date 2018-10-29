var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/google',
	passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

router.get('/google/callback', function(req, res, next){
	passport.authenticate('google', function(err, user, info){
		if(info.exist == true){
			req.session = user;
			res.redirect('/');
		}else	if(info.exist == false){
			req.session = user;
			res.redirect('/registration');
		}else{
			throw new Error("Authentication failed !")
		}
	})(req, res, next);
});


module.exports = router;
