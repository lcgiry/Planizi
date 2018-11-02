/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_need_equipment', {
    task_need_equipment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_need_equipment_task_shift_subset: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'task_shift_subset',
        key: 'task_shift_subset_id'
      }
    },
    task_need_equipment_equipment_need: {
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
    tableName: 'task_need_equipment'
  });
};
