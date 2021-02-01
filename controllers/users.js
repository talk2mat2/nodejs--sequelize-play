

const Tweets= require('../models/Tweets')
const usersmodels = require('../models/usersmodels')
const {authSchema,registerSchema} = require('../helpers/validation_schema')

//we need to inform node js about model relationship
usersmodels.hasMany(Tweets,{as:"tweets",foreignKey:"userid"})
Tweets.belongsTo(usersmodels,{as:"user",foreignKey:"userid"})

//onetomanyrelationship
//user.hasMany(Tweets,{as:"tweeets",foreignkey:"ser.id"})
//tweets.belongto(User,{as:"user",foreignKey:user.id})
// const promise= new [Promise((resolve,reject)=>{
//     let x=true
//     if(x)resolve(console.log(tru))
// })]




exports.getAllUsers= async function(req,res){

    const result=   authSchema.validate(req.body)
    // const result2=registerSchema.validate(req.body)
    // then we use result.email
    //result.password to access the output password


await usersmodels.findAll({}).then(result=>{
    res.status(200).json(result)
}).catch(err=>console.log(err))

}
exports.getAllUserstweets= async function(req,res){
    //we find all tweets belonging to a user name martins, in another model called tweets using model relationship
await usersmodels.findOne({where:{username:"emeka"},include:[{model:Tweets,as:"tweets"}]}).then(result=>{
    console.log(result)
    res.status(200).json(result)
}).catch(err=>{
    console.log(err)
    res.status(404).json(err)
})

}


exports.registerUser=async function(req,res){
  const {username} = req.body
  //validation from front end data received-
  //before we store to database
  //we can also save hashed copy of the passsword to the sql database
 usersmodels.create({
     username:"phillip",
     password:"1234password",

 }).then(result=>{res.status(200).send(result)}).catch(err=>console.log(err))



 


}

//create tweets 
exports.CreateTweets=function(req,res){
    const tweetsMsg="this is testing tweets"
    const user=3
//mmicking reqest from user front end
    Tweets.create({content:tweetsMsg,userid:user}).then(result=>{res.status(200).send(result)}).catch(err=>console.log(err))

}

