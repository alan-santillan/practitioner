const Wallet = require ('../models/Wallet')
const Account = require('../models/Account')



const getUserWalletAccounts = (req,res) => {
    
    Wallet.findOne({"walletId":req.body.dni}, function(err,wallet) {
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