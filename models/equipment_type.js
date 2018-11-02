/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_type', {
    equipment_type_label: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    equipment_type_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    equipment_type_name_fr: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    equipment_type_description: {
      type: DataTypes.STRING(256),
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
    tableName: 'equipment_type'
  });
};
