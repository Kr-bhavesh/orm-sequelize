const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('./sqlize')
const Comment = sequelize.define(
    "Comment",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "Comment",
    }
  );
  module.exports=Comment