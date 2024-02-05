const User = require('../models/user')
const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('../models/sqlize')

const add_user = async(req,res)=>{
    try {
     insert = await User.create({name:req.body.name})
     res.status(200).json(insert)
        
    } catch (error) {
        res.status(500).send({message:error.message})        
    }
}
const get_all_user = async(req,res)=>{
    try {
        data = await User.findAll({});
        res.status(200).json(data);  
    } catch (error) {
        res.status(200).json({message:error.message})
    }
}
const get_single_user= async(req,res)=>{
    try {
        id = req.params.id
        data = await User.findOne({where:{id:id}})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:error.message})
        console.log(error);
    }
    
}
const delete_user= async(req,res)=>{
    try {
        id=req.params.id
        data = await User.destroy({where:{id:id}})
        res.status(200).json("product delete successful")
    } catch (error) {
        res.status(500).send({message:error.message})
        console.log(error);
    }
}
const update_user = async(req,res)=>{
    try {
        id = req.params.id;
        data = {name:req.body.name};
        save = await User.update(data,{where:{id:id}})
        res.status(200).send("product update successfull");
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
module.exports={add_user,get_all_user,get_single_user,delete_user,update_user}