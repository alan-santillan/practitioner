const express = require ('express')
const router = express.Router()

const AccountController = require('../controllers/accountController')
const authenticate = require('../middleware/authenticate')


router.post('',authenticate,AccountController.addAccount)

module.exports=router
