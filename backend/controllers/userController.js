const User = require ('../models/User')
const Wallet = require ('../models/Wallet')
const Account = require ('../models/Account')

const getUserInformation = (req, res) => {

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
                    user.password=""
                    user.dni=""
                    wallet.walletId=""
                    res.json({
                        user,
                        wallet
                    })
                        
                }
            })
        }
    })

}

const getUserWallet = (req , res) => {
    
    Wallet.findOne({"walletId":req.body.dni}, function(err,wallet) {
        if(err){
            res.json({
                error:err
            })
        }else{
            wallet.walletId=""
            res.json({
                wallet
            })
                
        }
    })
}

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

module.exports={getUserInformation,
    getUserWallet,
    getUserWalletAccounts,
    addAccount}