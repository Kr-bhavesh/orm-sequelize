const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('./sqlize')
const Tutorial = sequelize.define(
    "Tutorial",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "Tutorial",
    }
  );
  module.exports=Tutorial