/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    location_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    location_label: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    location_longitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    location_latitude: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    location_address: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    location_postcode: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    location_city: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    location_description: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    tableName: 'location'
  });
};
