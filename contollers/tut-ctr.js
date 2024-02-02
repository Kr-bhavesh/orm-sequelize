const Tutorial = require('../models/tutorial')
const add_tutorial = async(req,res)=>{
    try {
        data = await Tutorial.create({name:req.body.name})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
const tutcom = async(req,res)=>{
    try {
        data = await Tutorial.findAll({include:["comments"]})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
module.exports={add_tutorial,tutcom}