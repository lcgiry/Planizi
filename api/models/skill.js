/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill', {
    skill_label: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    skill_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    skill_name_fr: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    skill_description: {
      type: DataTypes.STRING(256),
      allowNull: true
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
    tableName: 'skill'
  });
};
