var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

router.get('/google/callback', passport.authenticate(('google'), {successRedirect: '/', failureRedirect: '/login'}));


module.exports = router;
