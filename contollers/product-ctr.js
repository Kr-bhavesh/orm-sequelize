const myTbl= require('../models/mytbls')
const User = require('../models/user')
const Order = require('../models/order')
const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../models/sqlize')
const tblInstance = myTbl(sequelize, DataTypes)
Order.sync()


const add_product = async(req,res)=>{
    try {
     insert = await tblInstance.create({name:req.body.name})
     res.status(200).json(insert)
        
    } catch (error) {
        res.status(500).send({message:error.message})        
    }
}
const get_all_product = async(req,res)=>{
    try {
        data = await tblInstance.findAll({});
        res.status(200).json(data);  
    } catch (error) {
        res.status(200).json({message:error.message})
    }
}
const get_single_product = async(req,res)=>{
    try {
        id = req.params.id
        data = await tblInstance.findOne({where:{id:id}})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:error.message})
        console.log(error);
    }
    
}
const delete_product = async(req,res)=>{
    try {
        id=req.params.id
        data = await tblInstance.destroy({where:{id:id}})
        res.status(200).json("product delete successful")
    } catch (error) {
        res.status(500).send({message:error.message})
        console.log(error);
    }
}
const update_product = async(req,res)=>{
    try {
        id = req.params.id;
        data = {name:req.body.name};
        save = await tblInstance.update(data,{where:{id:id}})
        res.status(200).send("product update successfull");
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
module.exports={add_product,get_all_product,get_single_product,delete_product,update_product}