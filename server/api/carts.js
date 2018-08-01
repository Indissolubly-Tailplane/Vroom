const router = require('express').Router()
const {Car} = require('../db/models')
const {Cart} = require('../db/models')
const asyncHandler = require('express-async-handler');

//get carts by user Id

router.get('/:userId', asyncHandler(async(req, res, next) => {
  const userId = req.params.userId;
  const cart = await Cart.findAll({
    where: {
      userId
    }
  })
  res.status(201).json(cart);
}))

//delete carts by user Id

router.delete('/:userId', asyncHandler(async(req, res, next) => {
  const userId = req.params.userId;
  const cart = await Cart.destroy({
    where: {
      userId
    }
  })
  res.status(201).json(cart);
}))

router.post('/', asyncHandler(async(req,res,next) => {
  const userId = req.params.userId;
  const cart = await Cart.bulkCreate(req.body)
  res.status(200).json(cart);
}))

module.exports = router
