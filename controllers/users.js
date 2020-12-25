
const Tweets= require('../models/Tweets')
const usersmodels = require('../models/usersmodels')

exports.getAllUsers= async function(req,res){
await usersmodels.findAll({}).then(result=>{
    res.status(200).json({result:result})
}).catch(err=>console.log(err))

}


exports.registerUser=async function(req,res){
 usersmodels.create({
     username:"emeka",
     password:"1234password",

 }).then(result=>{res.status(200).send({result:result})}).catch(err=>console.log(err))


}