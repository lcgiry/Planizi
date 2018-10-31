var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user');

router.get("/", function(req, res, next){
	res.render("registrationForm",{
		user: req.session.userID
	});
});

router.post("/", function(req, res, next){

});

module.exports = router;