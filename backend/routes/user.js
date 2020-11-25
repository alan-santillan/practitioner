const express = require ('express')
const router = express.Router()

const userController = require('../controllers/userController')
const authenticate = require('../middleware/authenticate')

router.get('',authenticate,userController.getUserInformation)
router.get('/wallet',authenticate,userController.getUserWallet)
router.get('/wallet/account',authenticate,userController.getUserWalletAccounts)
router.post('/wallet/account',authenticate,userController.addAccount)

module.exports = router
