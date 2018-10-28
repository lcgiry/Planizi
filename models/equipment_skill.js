/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipment_skill', {
    equipment_skill_equipment: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'equipment',
        key: 'equipment_id'
      }
    },
    equipment_skill_skill: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'skill',
        key: 'skill_label'
      }
    }
  }, {
    tableName: 'equipment_skill'
  });
};
