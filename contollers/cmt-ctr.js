const add_comment = async(req,res)=>{
    try {
        data = await Tutorial.create({description:req.body.description})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({message:error.message})
    }
}
module.exports=add_comment
