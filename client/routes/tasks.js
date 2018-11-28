var express = require('express');
var router = express.Router();
const request = require("request");


router.get('/new-task', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{

		res.render('tasks/new-task');
	}

});

router.get('/tasks', function(req, res, next) {

	if(!req.session.user){
		res.redirect('/login');
	}else{

		res.render('tasks/list-tasks');
	}

});

module.exports = router;
