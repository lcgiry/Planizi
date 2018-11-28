var express = require('express');
var router = express.Router();
const request = require("request");
var test;



router.get('/new-task', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{
	
		request('http://localhost:8080/team/teams', { json: true }, (err, resu, teams) => {
			request('http://localhost:8080/user/users', { json: true }, (err, resu, users) => {
				res.render('tasks/new-task', {'teams':teams, 'users':users});

			})
		});	
	}

});

module.exports = router;
