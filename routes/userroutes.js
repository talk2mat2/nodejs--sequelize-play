const express= require('express')
const Router= express.Router()
const {getAllUsers,registerUser} = require('../controllers/users') 



Router.get('/',getAllUsers)
Router.get('/register',registerUser)


module.exports= Router