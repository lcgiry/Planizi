/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_team', {
    user_team_user: {
      type: DataTypes.STRING(256),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    user_team_team: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'team',
        key: 'team_label'
      }
    }
  }, {
    tableName: 'user_team'
  });
};
