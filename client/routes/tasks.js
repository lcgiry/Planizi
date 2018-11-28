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

		res.render('tasks/list-tasks', {
			tasks: [
				{task_label: 'Sortir les poubelles', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les avions', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les serviettes', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les animaux', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les pantalons', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les écrans', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les mobilettes', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les esquimaux', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
				{task_label: 'Sortir les couverts', task_description: 'Récupérer les poubelles pleines et les sortir', task_location: 'BMC', task_team: '', task_supervisor: 'John Ratignier', task_supervisor_phone: '06 15 24 65 45'},
			]
		});
	}

});

module.exports = router;
