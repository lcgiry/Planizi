/* jshint indent: 2 */
var sequelize = require('../config/database/config-database').sequelize;

var User = sequelize.import('../models/user');
var Skill = sequelize.import('../models/skill');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_skill', {
	  user_skill_id: {
		  type: DataTypes.INTEGER(11),
		  allowNull: false,
		  primaryKey: true,
		  autoIncrement: true
	  },
	  user_skill_user: {
		  type: DataTypes.STRING(256),
		  allowNull: false,
		  references: {
			  model: 'user',
			  key: 'user_mail'
		  }
	  },
	  user_skill_skill: {
		  type: DataTypes.STRING(45),
		  allowNull: false,
		  references: {
			  model: 'skill',
			  key: 'skill_label'
		  }
	  },
	  createdAt: {
		  type: DataTypes.DATE,
		  allowNull: true
	  },
	  updatedAt: {
		  type: DataTypes.DATE,
		  allowNull: true
	  }
  }, {
	  tableName: 'user_skill'
  });
};

User.belongsToMany(Skill, {through:'user_skill'});
Skill.belongsToMany(User, {through: 'user_skill'});