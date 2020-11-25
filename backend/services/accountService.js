const Wallet = require ('../models/Wallet')
const Account = require('../models/Account')
const jwt = require('jsonwebtoken')

const addAccount = (req,res) => {

    const token = req.headers.authorization
    const decode = jwt.verify(token,'yhU)kg(AEv')
    
    Wallet.findOne({"walletId":decode.dni},(err,wallet) => {
        if(err){
            res.json({
                error:err
            })
        }else{
            let account = new Account ({
                accountType:req.body.accountType,
                balance:0,
                owner:decode.dni
            })
            account.save()
            .catch(error => {
                res.status(404)
                res.json({
                    message:error
                })
            }) 
            wallet.account.push(account._id)
            wallet.save()
            .catch(error => {
                res.status(404)
                res.json({
                    message:error
                })
            }) 
            
            res.json({
                wallet
            })
                
        }
    })

}

module.exports={addAccount}