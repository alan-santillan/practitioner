const express = require ('express')
const router = express.Router()

const userController = require('../controllers/userController')
const authenticate = require('../middleware/authenticate')

router.get('',authenticate,userController.getUserInformation)

module.exports = router
