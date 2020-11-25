const express = require ('express')
const router = express.Router()

const WalletController = require('../controllers/walletController')
const authenticate = require('../middleware/authenticate')


router.get('',authenticate,WalletController.getUserWalletAccounts)


module.exports=router
