var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config_authentication = require('./config-authentication.json');

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
			console.log(accessToken);
			console.log(refreshToken);
			console.log(profile);
			done(err, {"user_id":"jjjtest"});
		}
	));

module.exports = {
	googleAuthenticationConfiguration: googleAuthenticationConfiguration
}