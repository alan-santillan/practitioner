const User = require ('../models/User')
const Wallet = require ('../models/Wallet')
const jwt = require('jsonwebtoken')
const AuthService = require ('../services/authService')
const bcrypt = require('bcryptjs')

const getUserInformation = (req, res) => {

    const token = req.headers.authorization
    const decode = jwt.verify(token,'yhU)kg(AEv')

    User.findOne({"dni":decode.dni}, function(err,user) {
        if(err){
            res.json({
                error:err
            })
        }else{
            Wallet.findOne({"walletId":decode.dni}, function(err,wallet) {
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

const register = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, function(err,hashedPass) {
        
        if(err) {
            res.json({
                error:err
            })
        }
    
        let user = new User ({
            name:req.body.name,
            lastName:req.body.lastName,
            age:req.body.age,
            dni:req.body.dni,
            email:req.body.email,
            password:hashedPass,
            dateOfBirth:req.body.date,
            dateOfRegistry:Date.now(),
            lastUpdate:Date.now()
        })

        user.save()
        .catch(error => {
            res.status(404)
            res.json({
                message:'dni and email values must be unique'
            })
        }) 

        let wallet = new Wallet({
            walletId:req.body.dni,
            lastUpdate:Date.now()
        })
        wallet.save()
        .then(user => {
            res.json({
                message0:'User added succesfully!',
                message1:'Wallet created succesfully!'
            })
        })
        .catch(error => {
            res.status(404)
            res.json({
                message:'dni and email values must be unique'
            })
        })

    })
}

module.exports={getUserInformation,
    register}