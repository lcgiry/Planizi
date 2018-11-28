/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_need', {
    user_need_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_need_skill_1: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'skill',
        key: 'skill_label'
      }
    },
    user_need_skill_2: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'null',
      references: {
        model: 'skill',
        key: 'skill_label'
      }
    },
    user_need_skill_3: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'null',
      references: {
        model: 'skill',
        key: 'skill_label'
      }
    },
    user_need_skill_4: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'null',
      references: {
        model: 'skill',
        key: 'skill_label'
      }
    },
    user_need_trust_minimum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    user_need_team: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'null',
      references: {
        model: 'team',
        key: 'team_label'
      }
    },
    user_need_role: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: 'null',
      references: {
        model: 'role',
        key: 'role_label'
      }
    },
    user_need_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
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
    tableName: 'user_need'
  });
};
