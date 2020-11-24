const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const AuthRoute = require('./routes/auth')

//Connect to MongoDB
mongoose.connect('mongodb://mongodb.local:27017/practitioner',{
    useNewUrlParser:true,
    useUnifiedTopology:true
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

app.use('/api',AuthRoute)
