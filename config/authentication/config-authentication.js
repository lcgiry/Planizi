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
				User.findAll({
					where: {user_mail: userMail}
				})
					.then(user => {
						if(user !== '' && user != '' && user !== null && user != undefined){
							console.log('-->'+user);
							done(null, userMail,{exist: true, message: "Google check good"});
						}else{
							console.log('jj');
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

module.exports = {
	googleAuthenticationConfiguration: googleAuthenticationConfiguration
}