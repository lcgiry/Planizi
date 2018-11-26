var express = require('express');
var router = express.Router();
const request = require("request");




router.get('/addAvailabilities', function(req, res, next) {

	//if(!req.session.user){
    if(req.session.user){
		res.redirect('/login');
	}else{
		res.render('availabilities/addAvailabilities', {user: 'req.session.user'});
	}
});

module.exports = router;
