var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { test: 'Express' });
});

router.get('/', function(req, res, next) {
	res.send('welcome');
});


module.exports = router;
