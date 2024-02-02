const Order = require('../models/order')
const {Sequelize,Op} = require('sequelize')
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
const add_ord = async(req,res)=>{
    try {
     insert = await Order.create({order_name:req.body.order_name,order_amt:req.body.order_amount})
     res.status(200).json(insert)
        
    } catch (error) {
        res.status(500).send({message:error.message})        
    }
}
const ord_opr = async(re,res)=>{
    try {
        data = await Order.findAll({where:{order_amt:{[Op.lt]:800}}})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const order_max = async(req,res)=>{
    try {
        data = await Order.max('order_amt')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const order_min = async(req,res)=>{
    try {
        data = await Order.findAll({where:{UserUserId:7}})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={add_ord,ord_opr,order_max,order_min}