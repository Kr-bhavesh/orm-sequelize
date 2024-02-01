const myTbl= require('../models/mytbls')
const {Sequelize, DataTypes} = require('sequelize')
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
console.log(myTbl)

const tblInstance = myTbl(sequelize, DataTypes)

// const p = new Product()
// console.log(p);

const create = async(req,res)=>{
    data={
        name:req.body.name
    }
    final = await tblInstance.create(data);
    res.status(200).json("done")
}
const get_all = async(req,res)=>{
    data = await tblInstance.findAll({});
    res.status(200).json(data);
}
const get_one = async(req,res)=>{
    id = req.params.id
    data = await tblInstance.findOne({where:{id:id}})
    res.status(200).json(data)
}
const delete_one = async(req,res)=>{
    id=req.params.id
    data = await tblInstance.destroy({where:{id:id}})
    res.status(200).json("deleted")
}
module.exports={create,get_all,get_one,delete_one}