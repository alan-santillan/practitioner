const User = require ('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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
        .then(user => {
            res.json({
                message:'User added succesfully!'
            })
        })
        .catch(error => {
            res.json({
                message:error
            })
        })

    })
}

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
                    let token = jwt.sign({name:user.name},'yhU)kg(AEv',{expiresIn:900000})
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

module.exports={
    register,
    login
}