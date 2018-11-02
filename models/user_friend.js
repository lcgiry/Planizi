/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_friend', {
    user_friend_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_friend_user: {
      type: DataTypes.STRING(256),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    user_friend_friend: {
      type: DataTypes.STRING(256),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_mail'
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
    tableName: 'user_friend'
  });
};
