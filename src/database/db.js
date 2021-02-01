const {Sequelize}= require('sequelize')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }



  const Mysql={
    options:{
      host:"db4free.net",
      port:3306,
      database:process.env.database,
      dialect:"mysql",
      username:process.env.USER,
      password:process.env.PASSWORD
    }
  }
  
// console.log(process.env.PASSWORD)
const sequelize= new Sequelize(Mysql.options)

sequelize.authenticate().then(()=>{
  console.log(`connected to ${process.env.database} at ${process.env.HOST} `)
}).catch(err=>{console.log("unable to connect to database",err)})






//we export our  sequelize instance as default and also as a global variable
module.exports=sequelize;
global.sequelize=sequelize;


//commands
//create migrations
//seqelize migration:create migrations --name create users table

//to migrate--
//sequelize db:migrate


///to add a foreign key i.e model relationship
//we add the related model field id on the model
// related so that the foreign key will be plave d there


//undo migratation
//sequelize db :migration:undo



// const create_users= Promise.all()








