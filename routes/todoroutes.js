const {add_todo,get_all_todo,get_single_todo,delete_todo,update_todo}= require('../contollers/todocontroller')
const express = require('express')
const router = express.Router()
router.post('/addtodo',add_todo);
router.get('/getalltodo',get_all_todo);
router.get('/getsingletodo/:id',get_single_todo);
router.put('/updatetodo',update_todo);
router.delete('/deletetdo',delete_todo);
module.exports=router;