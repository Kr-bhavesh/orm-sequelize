const { Sequelize, DataTypes, Dialect } = require("sequelize");
const sequelize = new Sequelize(
     'test_db',
     'root',
    'mysqldb123',
  {
    host: 'localhost',
    dialect:'mysql',
  }
);

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
  },
  {
    tableName: "User",
  }
);
module.exports=User