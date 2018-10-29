var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user.js');

/* GET home page. */
router.get('/login', function(req, res, next) {
	emailBody = req.query.mail;
	console.log('jj '+emailBody+' '+__dirname);

	User.findOrCreate({where: {user_mail: emailBody}})
		.then((user, created) => {
			console.log("user--- "+user);
			console.log("created---"+ created);
		});

	res.render('login', { test: 'Express' });
});

router.get('/', function(req, res, next) {
	res.send('welcome');
});



module.exports = router;
