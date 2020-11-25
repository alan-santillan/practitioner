const User = require ('../models/User')
const Wallet = require ('../models/Wallet')
const secret = require ('../config/secret')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const login = (req, res, next) => {

    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password, function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({dni:user.dni},secret.secret,{expiresIn:'1h'})
                    res.json({
                        message:'Login Successful',
                        token
                    })
                }else{
                    res.json({
                        message:'Passwords do not match'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found'
            })
        }
    })
}

module.exports={login}