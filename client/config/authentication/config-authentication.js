var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config_authentication = require('./config-authentication.json');
var request = require('request');
var serverConfig = require('../../config/server');

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

			if (userMail) {

				request.get(serverConfig.server + '/user/user/' + userMail, (error, response, body) => {
					if(body){
						var result = JSON.parse(body);
					}else{
						throw new Error("No server running");
					}
					//console.log(result);
					if (response.statusCode === 200 && result.user_mail == userMail) {
						done(null, result, {exist: true, message: "Google check good"});
					}else if(response.statusCode == 404 && result.error == 'UserNotFound'){
						done(null, userMail, {exist: false, message: "User does not exist yet"});
					}else{
						done(new Error('Problem with API'), false);
					}
				});

			} else {
				done(err, false, 'Error from Google authentication');
			}
		}
	));

module.exports = {
	googleAuthenticationConfiguration: googleAuthenticationConfiguration
}