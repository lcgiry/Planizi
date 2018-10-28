/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_need', {
    equipment_need_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    equipment_need_equipment: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'equipment',
        key: 'equipment_id'
      }
    },
    equipment_need_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'equipment_need'
  });
};
