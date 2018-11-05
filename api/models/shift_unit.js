/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift_unit', {
    shift_unit_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    shift_unit_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shift_unit_end: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shift_unit_point: {
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
    tableName: 'shift_unit'
  });
};
