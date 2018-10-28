/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    task_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_label: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    task_description: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    task_team: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'team',
        key: 'team_label'
      }
    },
    task_supervisor: {
      type: DataTypes.STRING(256),
      allowNull: true,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    task_master: {
      type: DataTypes.STRING(256),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_mail'
      }
    },
    task_group: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'task_group',
        key: 'task_group_id'
      }
    },
    task_location: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'location',
        key: 'location_id'
      }
    },
    task_instruction: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'task_instructions',
        key: 'task_instruction_id'
      }
    }
  }, {
    tableName: 'task'
  });
};
