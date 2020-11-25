const Wallet = require ('../models/Wallet')
const Account = require('../models/Account')

const addAccount = (req,res) => {
    
    Wallet.findOne({"walletId":req.body.dni},(err,wallet) => {
        if(err){
            res.json({
                error:err
            })
        }else{
            let account = new Account ({
                accountType:req.body.accountType,
                balance:0,
                owner:req.body.dni
            })
            account.save()
            wallet.account.push(account._id)
            wallet.save()
            
            res.json({
                wallet
            })
                
        }
    })

}

module.exports={addAccount}