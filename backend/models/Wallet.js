const mongoose = require('mongoose')
const Schema = mongoose.Schema

const walletSchema = new Schema({
    walletId:{
        type:String,
        unique:true
    },
    account:[String],
    lastUpdate:{
        type:Date
    },

})

const Wallet = mongoose.model('Wallet',walletSchema)
module.exports=Wallet