const express = require('express')
const app = express()
const router = require('./routes/model-routes')
const Order = require('./models/order')
const User = require('./models/user')
const Tutorial = require('./models/tutorial')
const Comment = require('./models/comments')
const { Sequelize, DataTypes, Dialect } = require("sequelize");
const sequelize = new Sequelize(
    'test_db',
    'root',
    'mysqldb123',{
    host:'localhost',
    dialect:'mysql'
    } 
    )
    sequelize.authenticate().then(()=>{
    console.log("db conneceted");
    })
    .catch(error=>{
    console.log(error);
    })
Tutorial.hasMany(Comment,{as:"comments"})
Comment.belongsTo(Tutorial, {
    foreignKey: "tutorial_Id",
    as: "tutorial",
  })
Tutorial.sync()
Comment.sync()
app.use(express.json())
app.listen(8080,()=>{
    console.log("app started listening");
})
app.use('/api',router);