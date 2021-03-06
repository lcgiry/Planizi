/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task_instructions', {
    task_instructions_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    task_instructions_instructions: {
      type: DataTypes.BLOB,
      allowNull: false
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
    tableName: 'task_instructions'
  });
};
