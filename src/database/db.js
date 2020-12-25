const {Sequelize}= require('sequelize')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
// console.log(process.env.PASSWORD)
const sequelize= new Sequelize(`${process.env.database}`,'root',`${process.env.PASSWORD}`,{
    host:"127.0.0.1",
    dialect:"mysql",
    operatorsAliases:"false"
})





//we export our  sequelize instance as default and also as a global variable
module.exports=sequelize;
global.sequelize=sequelize;











