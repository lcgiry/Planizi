/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift_subset', {
    shift_subset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    shift_subset_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shift_subset_end: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'shift_subset'
  });
};
