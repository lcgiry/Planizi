/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shift_set', {
    shift_set_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    shift_set_start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shift_set_end: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'shift_set'
  });
};
