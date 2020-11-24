const express = require ('express')
const router = express.Router()

const authController = require('../controllers/authController')
const authenticate = require('../middleware/authenticate')

router.post('/register',authController.register)
router.post('/login',authController.login)

module.exports = router

