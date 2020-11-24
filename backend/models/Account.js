const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
    accountType:{
        type:String,
        enum:['USD','ARS']
    },
    balance:{
        type:Number
    },
    owner:{
        type:String
    },
    transactions:[String]
})

const Account = mongoose.model('Account',accountSchema)
module.exports=Account