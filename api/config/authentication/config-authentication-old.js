var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config_authentication = require('./config-authentication.json');

var sequelize = require('../database/config-database').sequelize;
const User = sequelize.import('../../models/user.js');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
let googleAuthenticationConfiguration = passport.use(new GoogleStrategy(
		{
			clientID: config_authentication.google.clientID,
			clientSecret: config_authentication.google.clientSecret,
			callbackURL: config_authentication.google.callbackURL
		},
		function(accessToken, refreshToken, profile, done) {
			let userMail = profile.emails[0].value;

			if(userMail){
				User.findOne({
					where: {user_mail: userMail},
					raw: true
				})
					.then(user => {
						if(user !== '' && user != '' && user !== null && user != undefined){
							done(null, user,{exist: true, message: "Google check good"});
						}else{
							done(null, userMail, {exist: false, message: "User does not exist yet"});
						}
					})
					.catch(err =>{
						done(err, false, "Error while looking for the user in database");
					});

			}else{
				done(null, false)
			}
		}
	));

passport.serializeUser(function(user, done) {
	if(user instanceof User){
		console.log('UTILISATEUR DETECTE');
		done(null, user.user_mail);
	}else if(user instanceof String){
		console.log('UTILISATEUR DETECTE');
		done(null, user);
	}
});

passport.deserializeUser(function(user_id, done) {
	User.findOne({where: {user_mail: user_id}})
		.then(result => {
			done(null, result);
		})
		.catch(err => {
			done(err, null);
		});
});

module.exports = {
	googleAuthenticationConfiguration: googleAuthenticationConfiguration
}