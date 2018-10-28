/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_need_user', {
    task_need_user_task_shift_subset: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'task_shift_subset',
        key: 'task_shift_subset_id'
      }
    },
    task_need_user_user_need: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user_need',
        key: 'user_need_id'
      }
    }
  }, {
    tableName: 'task_need_user'
  });
};
