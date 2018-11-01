var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/google',
	passport.authenticate('google', { session:false, scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

router.get('/google/callback', function(req, res, next){
	passport.authenticate('google', { session: false }, function(err, user, info){
		if(info.exist == true){
			req.session.userID = user;
			console.log('AUTHENTIFICATION : '+req.session.userID);
			res.redirect('/');
		}else	if(info.exist == false){
			req.session.userID = user;
			req.session.save();
			console.log('NEW AUTHENTIFICATION : '+req.session.userID);
			res.redirect('/registration/personal');
		}else{
			throw new Error("Authentication failed !")
		}
	})(req, res, next);
});


module.exports = router;
