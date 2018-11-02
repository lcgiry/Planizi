/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_shift_subset', {
    task_shift_subset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_shift_subset_task: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'task',
        key: 'task_id'
      }
    },
    task_shift_subset_shift_subset: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_subset',
        key: 'shift_subset_id'
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
    tableName: 'task_shift_subset'
  });
};
