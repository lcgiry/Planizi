/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('availibility_equipment', {
    availibility_equipment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    availibility_equipment_shift_unit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_unit',
        key: 'shift_unit_id'
      }
    },
    availibility_equipment_equipment: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'equipment',
        key: 'equipment_id'
      }
    },
    availibility_equipment_available: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    },
    availibility_equipment_assignment: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
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
    tableName: 'availibility_equipment'
  });
};
