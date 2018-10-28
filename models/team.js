/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('team', {
    team_label: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    team_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    team_name_fr: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    team_description: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'team'
  });
};
