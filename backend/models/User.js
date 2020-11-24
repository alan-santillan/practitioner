const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator');

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:18,
        required:true
    },
    dni:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        validate:{
              validator: validator.isEmail,
              message: '{VALUE} is not a valid email'
            },
        unique: true
        },
    password:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date
    },
    dateOfRegistry:{
        type:Date
    },
    lastUpdate:{
        type:Date
    }

})

const User = mongoose.model('User',userSchema)
module.exports=User