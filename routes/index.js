var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user.js');

/* GET home page. */
router.get('/login', function(req, res, next) {
	res.render('login', { test: 'Express' });
});

router.get('/', function(req, res, next) {
	res.send('welcome');
});

router.get('/test', function(req, res, next) {
	res.render('test');
});



module.exports = router;
