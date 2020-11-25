const { model } = require('../models/User')
const userService = require ('../services/userService')


const getUserInformation = userService.getUserInformation

const register = userService.register

module.exports={getUserInformation,register}