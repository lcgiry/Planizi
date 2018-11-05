/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_mail: {
      type: DataTypes.STRING(256),
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_surname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_nickname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_gender: {
      type: DataTypes.ENUM('m','f'),
      allowNull: false
    },
    user_phone: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    user_birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    user_description: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    user_experience: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    user_incapacity: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    user_teeshirt_size: {
      type: DataTypes.ENUM('S','M','L','XL'),
      allowNull: true
    },
    user_trust_point: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_involvement_point: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_happiness_point: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_rights: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'limited',
      references: {
        model: 'rights',
        key: 'rights_label'
      }
    },
    user_role: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: 'visitor',
      references: {
        model: 'role',
        key: 'role_label'
      }
    },
    user_identity_card_file: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_social_security_card_file: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_social_security_card_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_driver_licence_file: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_cv_file: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    user_last_login: {
      type: DataTypes.DATE,
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
    tableName: 'user'
  });
};
