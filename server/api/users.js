const router = require('express').Router()
const {User} = require('../db/models')
const asyncHandler = require('express-async-handler')
//gets all users
router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    if (req.user !== undefined && req.user.dataValues.adminStatus === true) {
      const allUsers = await User.findAll({})
      res.json(allUsers)
    }else{
      res.send('You are not authorized!')
    }
  })
)


//gets user by id
router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    if (req.user !== undefined && req.user.dataValues.adminStatus === true) {
    const userId = req.params.id
    const user = await User.findAll({where: {id: userId}})
    res.json(user[0]) 
  }else{
      res.send('You are not authorized!')
  }
  })
)

router.delete('/:id', async (req, res, next) => {
  try {
    if (req.user !== undefined && req.user.dataValues.adminStatus === true){
      User.destroy({where: {id: req.params.id}})
      res.sendStatus(202)
    } else {
      res.send('You are not authorized!')
    }
    } catch (err) {
      next(err)
    }
})
module.exports = router
