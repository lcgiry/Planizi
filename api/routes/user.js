var express = require('express');
var router = express.Router();
var sequelize = require('../config/database/config-database').sequelize;

const User = sequelize.import('../models/user.js');

/* GET home page. */
router.get('/mail/:id', function(req, res, next) {

	User.findOne({ where: {user_mail: req.params.id}, raw: true })
		.then(userResult =>{
			if(userResult){
				res.type('json');
				res.send(userResult);
			}else{
				res.status(404).end();
			}

		})
		.catch(err => {
			console.error("ERROR - GET /mail/id >"+err)
		});


});


module.exports = router;
