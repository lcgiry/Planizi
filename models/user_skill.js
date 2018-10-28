/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_skill', {
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
    }
  }, {
    tableName: 'user_skill'
  });
};
