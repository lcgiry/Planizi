var mysql = require('mysql');
var config_database = require('./config-database.json');
const Sequelize = require('sequelize');

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

const sequelize = new Sequelize('db_planizi', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql',
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
});

let sequelizeAuthentication = function (){
	sequelize.authenticate()
		.then(function (err) {
			console.log('Connected to DB with Sequelize !');
		}, function (err) {
			console.log('Connexion to DB with Sequelize do not works');
		})
}

module.exports = {
	mysqlDatabaseConfiguration: mysqlConnexion,
	sequelizeInitialisation: sequelizeAuthentication,
	sequelize: sequelize
}