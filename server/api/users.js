const router = require('express').Router()
const {User} = require('../db/models')
const asyncHandler = require('express-async-handler')

//gets all users

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    console.log('here!')
    const allUsers = await User.findAll({})
    res.json(allUsers)
  })
)

//gets user by id

router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id
    const user = await User.findAll({where: {id: userId}})
    res.json(user)
  })
)

module.exports = router
