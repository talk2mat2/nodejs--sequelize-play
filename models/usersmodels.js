const Sequelize = require('sequelize');
const sequelize = require('../src/database/db');




module.exports= sequelize.define('users',{
    
  id:{type:Sequelize.INTEGER(11),
    AllowNull:false,
    primaryKey:true,
    autoIncrement:true},
username:{
  type:Sequelize.STRING(15),
  AllowNull:false,
  unige:true
},
password:{  
  AllowNull:false,
  type:Sequelize.STRING(15),
},
createdAt:Sequelize.TIME,
updatedAt:Sequelize.TIME
 })


