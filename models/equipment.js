/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment', {
    equipment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    equipment_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    equipment_description: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    equipment_type: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'equipment_type',
        key: 'equipment_type_label'
      }
    }
  }, {
    tableName: 'equipment'
  });
};
