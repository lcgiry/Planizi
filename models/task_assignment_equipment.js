/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_assignment_equipment', {
    task_assignment_equipment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_assignment_equipment_task_shift_subset: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'task_shift_subset',
        key: 'task_shift_subset_id'
      }
    },
    task_assignment_equipment_equipment: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'equipment',
        key: 'equipment_id'
      }
    },
    task_assignment_equipment_need_fulfilled: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'equipment_need',
        key: 'equipment_need_id'
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
    tableName: 'task_assignment_equipment'
  });
};
