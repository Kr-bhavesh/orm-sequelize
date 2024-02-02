const { Sequelize, DataTypes, Dialect } = require("sequelize");
const User = require("./user");
const sequelize = new Sequelize(
     'test_db',
     'root',
    'mysqldb123',
  {
    host: 'localhost',
    dialect:'mysql',
  }
);

const Order = sequelize.define(
  "Order",
  {
    order_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    order_amt:{
        type:DataTypes.DECIMAL,
        allowNull:false
    },
    u_id:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:'user_id'
        }
    }
  },
  {
    tableName: "Order",
  }
);

module.exports=Order