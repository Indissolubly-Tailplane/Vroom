const router = require('express').Router()
const {Order} = require('../db/models')
const {Car} = require('../db/models')
const asyncHandler = require('express-async-handler')

//get all orders

router.get(
  '/email', //cg@email.com ?email=cg%40email%2Ecom
  asyncHandler(async (req, res, next) => {
    console.log('hello from Order api/orders')
    console.log('req.query', req.query)
    const allOrders = await Order.findAll({
      where: {
        email: req.query.email
        //req.query.email
      },
      include: [
        {
          model: Car
        }
      ]
    })
    console.log('req.query: ', req.query)
    res.json(allOrders)
  })
)

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    console.log('hello from Order api/orders')
    const allOrders = await Order.findAll({
      include: [
        {
          model: Car
        }
      ]
    })
    res.json(allOrders)
  })
)

//get order by Id with carsInOrder
router.get(
  '/:orderId',
  asyncHandler(async (req, res, next) => {
    const orderId = req.params.orderId
    const order = await Order.findById(orderId)
    const carsInOrder = await order.getCars()
    const final = {
      order: order,
      carsInOrder: carsInOrder
    }
    res.json(final)
  })
)

//get cars by orderId

// get order by email
// router.get(
//   '/:email',
//   asyncHandler(async (req, res, next) => {
//     const userEmail = req.params.email
//     const order = await Order.findAll({
//       where: {
//         email: userEmail
//       }
//     })
//     res.send(order)
//   })
// )

router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const newOrder = await Order.create(req.body)
    res.json(newOrder)
  })
)

router.put(
  '/:orderId',
  asyncHandler(async (req, res, next) => {
    const orderId = req.params.orderId
    const order = await Order.findById(orderId)
    order.update(req.body)
    res.json(`Order ${orderId} has been updated!`)
  })
)
router.post('/update/:orderId', asyncHandler(async(req,res,next) => {
  const orderId = req.params.orderId
  const orderToUpdate = await Order.findById(orderId);
  await orderToUpdate.setCars(req.body.carId);
  res.send(`Items updated successfully in order ${orderToUpdate.id}`)
}))

module.exports = router
