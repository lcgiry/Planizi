/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rights', {
    rights_label: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    rights_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rights_name_fr: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rights_description: {
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
    tableName: 'rights'
  });
};
