const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    
    transaction:{
        type:String
    },
    originAccount:{
        type:String
    },
    destinationAccount:{
        type:String
    },
    value:{
        type:Number
    },
    detail:{
        type:String
    },
    dateOfTransaction:{
        type:Date,
        default:Date.now()
    }

})

const Transaction = mongoose.model('Transaction',transactionSchema)
module.exports=Transaction