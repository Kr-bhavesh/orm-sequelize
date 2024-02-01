const express = require('express')
const app = express()
const {Sequelize, DataTypes} = require('sequelize')
const create = require('./contollers/product-ctr')
app.use(express.json())
// app.use('/api',router)
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

app.listen(8080,()=>{
    console.log("app started listening");
})
app.post('/add',create)