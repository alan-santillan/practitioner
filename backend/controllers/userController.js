const User = require ('../models/User')
const Wallet = require ('../models/Wallet')

const getUserInformation = async (req, res) => {

    User.findOne({"dni":req.body.dni}, function(err,user) {
        if(err){
            res.json({
                error:err
            })
        }else{
            Wallet.findOne({"walletId":req.body.dni}, function(err,wallet) {
                if(err){
                    res.json({
                        error:err
                    })
                }else{
                    res.json({
                        user,
                        wallet
                    })
                        
                }
            })
        }
    })

}

module.exports={getUserInformation}