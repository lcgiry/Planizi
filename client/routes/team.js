var express = require('express');
var router = express.Router();
const request = require("request");

router.get('/', function(req, res, next) {

    if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('team/myTeam', {user: 'req.session.user'});
	}
});

module.exports = router;
