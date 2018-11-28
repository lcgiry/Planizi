/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift_set_subset', {
    shift_set_subset_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    shift_set_subset_set: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_set',
        key: 'shift_set_id'
      }
    },
    shift_set_subset_subset: {
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
    tableName: 'shift_set_subset'
  });
};
