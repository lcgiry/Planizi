var mysql = require('mysql');
var config_database = require('./config-database.json');

var con = mysql.createConnection({
	host: config_database.mysql.dev.host,
	user: config_database.mysql.dev.user,
	password: config_database.mysql.dev.password,
	port: config_database.mysql.dev.port
});

let mysqlConnexion = function () {
	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected to DB !");
	});
}

module.exports = {
	mysqlDatabaseConfiguration: mysqlConnexion
}