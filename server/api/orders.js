const router = require('express').Router()
const {Order} = require('../db/models')
const {Car} = require('../db/models')
const asyncHandler = require('express-async-handler')

//get all orders

router.get(
  '/email',
  asyncHandler(async (req, res, next) => {
    console.log('hello from Order api/orders')
    const allOrders = await Order.findAll({
      where: {
        email: req.body.email
      }
    })
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
    const carsInOrder = await order.getCars();
    const final = {
      order:  order,
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
    res.json(`Order ${newOrder.id} has been created!`)
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
module.exports = router
