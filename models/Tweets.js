const Sequelize= require('sequelize')
const sequelize = require('../src/database/db')


module.exports= sequelize.define('tweets',{
    id:{
        type:Sequelize.INTEGER(11),
        unique:true,
        autoIncrement:true,
        AllowNull:false,
        primaryKey:true,
        

    },
    content:Sequelize.STRING(255),
    userid:Sequelize.STRING(255),
    createdAt:Sequelize.TIME,
    updatedAt:Sequelize.TIME
})