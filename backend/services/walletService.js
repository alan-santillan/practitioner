const Wallet = require ('../models/Wallet')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')


const getUserWalletAccounts = (req,res) => {

    const token = req.headers.authorization
    const decode = jwt.verify(token,'yhU)kg(AEv')
    
    Wallet.findOne({"walletId":decode.dni}, function(err,wallet) {
        if(err){
            res.json({
                error:err
            })
        }else{
            var cadena = wallet.accounts
            res.json({
                cadena
            })               
        }
    })
}

module.exports={getUserWalletAccounts}