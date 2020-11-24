const jwt = require('jsonwebtoken')
const authenticate = (req, res, next) =>{
    try{
        const token = req.headers.authorization
        const decode = jwt.verify(token,'yhU)kg(AEv')
        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message:'Authentication failed'
        })
    }
}

module.exports=authenticate