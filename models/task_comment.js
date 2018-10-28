/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_comment', {
    task_comment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_comment_owner: {
      type: DataTypes.STRING(256),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    task_comment_content: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    task_comment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    task_comment_task: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'task',
        key: 'task_id'
      }
    }
  }, {
    tableName: 'task_comment'
  });
};
