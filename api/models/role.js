/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    role_label: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    role_name_fr: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    role_description: {
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
    tableName: 'role'
  });
};
