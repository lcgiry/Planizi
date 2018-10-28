/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_assignment_user', {
    task_assignment_task_shift_subset: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'task_shift_subset',
        key: 'task_shift_subset_id'
      }
    },
    task_assignment_user_user: {
      type: DataTypes.STRING(256),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    task_assignment_user_need_fulfilled: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_need',
        key: 'user_need_id'
      }
    }
  }, {
    tableName: 'task_assignment_user'
  });
};
