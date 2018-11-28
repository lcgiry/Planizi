var express = require('express');
var router = express.Router();
var passport = require('passport');


/* When you click on login to redirect to Google API */
router.get('/google',
	passport.authenticate('google', { session:false, scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

/* When google has authenticated the user and call back the application */
router.get('/google/callback', function(req, res, next){
	passport.authenticate('google', { session: false }, function(err, user, info){
		//If the user yet exist in database
		if(info.exist == true){
			req.session.user = user;
			console.log(user);
			req.session.userID = user.user_mail;
			console.log('AUTHENTIFICATION : '+req.session.userID);
			res.redirect('/');
		//If it is the first authentication
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
