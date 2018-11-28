/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift_subset_unit', {
    shift_subset_unit_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    shift_subset_unit_subset: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_subset',
        key: 'shift_subset_id'
      }
    },
    shift_subset_unit_unit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_unit',
        key: 'shift_unit_id'
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
    tableName: 'shift_subset_unit'
  });
};
