'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 queryInterface.createTable('users',{
   
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
  },

  down: async (queryInterface, Sequelize) => {
queryInterface.dropTable('users')
  }
};
