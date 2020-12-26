const express= require('express')
const Router= express.Router()
const {getAllUsers,registerUser,getAllUserstweets,CreateTweets} = require('../controllers/users') 



Router.get('/',getAllUsers)
Router.get('/register',registerUser)
Router.get('/usersTweets',getAllUserstweets)
Router.get('/createtweets',CreateTweets)


module.exports= Router