const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const AuthRoute = require('./routes/auth')
const UserRoute = require('./routes/user')
const WalletRoute = require('./routes/wallet')
const AccountRoute = require('./routes/account')

//Connect to MongoDB
mongoose.connect('mongodb://mongodb.local:27017/practitioner',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
})

const db = mongoose.connection
db.on('error',(err) => {
    console.log(err)
})
db.once('open', () =>{
    console.log(`Database connected`)
})


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/user/wallet',WalletRoute)
app.use('/user/wallet/account',AccountRoute)
