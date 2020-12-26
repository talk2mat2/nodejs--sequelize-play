

const Tweets= require('../models/Tweets')
const usersmodels = require('../models/usersmodels')


usersmodels.hasMany(Tweets,{as:"tweets",foreignKey:"userid"})
Tweets.belongsTo(usersmodels,{as:"user",foreignKey:"userid"})

exports.getAllUsers= async function(req,res){
await usersmodels.findAll({}).then(result=>{
    res.status(200).json(result)
}).catch(err=>console.log(err))

}
exports.getAllUserstweets= async function(req,res){
    //we find all tweets belonging to a user name martins, in another model called tweets using model relationship
await usersmodels.findAll({where:{username:"martins"},include:[{model:Tweets,as:"tweets"}]}).then(result=>{
    res.status(200).json(result)
}).catch(err=>console.log(err))

}


exports.registerUser=async function(req,res){
  const {username} = req.body
  //validation from front end data received-
  //before we store to database
  //we can also save hashed copy of the passsword to the sql database
 usersmodels.create({
     username:"emeka",
     password:"1234password",

 }).then(result=>{res.status(200).send(result)}).catch(err=>console.log(err))


}