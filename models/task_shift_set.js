/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_shift_set', {
    task_shift_set_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_shift_set_task: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'task',
        key: 'task_id'
      }
    },
    task_shift_set_shift_set: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_set',
        key: 'shift_set_id'
      }
    },
    task_shift_set_point: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'task_shift_set'
  });
};
