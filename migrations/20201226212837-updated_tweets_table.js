'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
return queryInterface.createTable('Tweets',{
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
  },

  down: async (queryInterface, Sequelize) => {
return queryInterface.dropTable('Tweets')
  }
};