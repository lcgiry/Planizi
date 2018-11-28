/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('availibility_user', {
    availibility_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    availibility_user_shift_unit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'shift_unit',
        key: 'shift_unit_id'
      }
    },
    availibility_user_user: {
      type: DataTypes.STRING(256),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    availibility_user_available: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    availibility_user_assignment: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
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
    tableName: 'availibility_user'
  });
};
