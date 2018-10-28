/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_instructions', {
    task_instruction_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_instructions_instructions: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'task_instructions'
  });
};
