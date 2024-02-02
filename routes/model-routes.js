const express = require('express')
const router = express.Router()
const {ord_opr,order_max,order_min}= require('../contollers/order-ctr')
const userctr = require('../contollers/user-ctr')
const {add_tutorial,tutcom} = require('../contollers/tut-ctr')
const cmtctr = require('../contollers/cmt-ctr')
const {add_product,get_all_product,get_single_product,delete_product,update_product}= require('../contollers/product-ctr')
router.post('/addcoment',cmtctr);
router.get('/order',ord_opr);
router.post('/addtut',add_tutorial);
router.get('/tutcom',tutcom);
router.get('/max',order_max);
router.get('/min',order_min);
router.post('/usr',userctr.add_user);
router.post('/add',add_product);
router.get('/all',get_all_product);
router.get('/get/:id',get_single_product);
router.put('/update/:id',update_product);
router.delete('/delete/:id',delete_product);
module.exports=router;