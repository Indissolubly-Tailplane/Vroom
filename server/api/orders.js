const router = require('express').Router();
const {Order} =  require ('../db/models');
const asyncHandler =  require('express-async-handler');

//get all orders

router.get('/', asyncHandler(async(req,res,next) => {
    console.log('hello from Order api/orders');
    const allOrders = await Order.findAll({});
    res.json(allOrders)
}))


//get order by Id
router.get('/:orderId', asyncHandler(async(req,res,next) =>{
    const orderId = req.params.orderId;
    const order = await  Order.findById(orderId);
    res.json(order);
})) 


router.post('/', asyncHandler(async(req,res,next) => {
    const newOrder = await Order.create(req.body);
    res.json(`Order ${newOrder.id} has been created!`)
}))

router.put('/:orderId' ,  asyncHandler(async(req,res,next) => {
    const orderId =  req.params.orderId;
    const order = await Order.findById(orderId);
    order.update(req.body);
    res.json(`Order ${orderId} has been updated!`);
}))
module.exports = router