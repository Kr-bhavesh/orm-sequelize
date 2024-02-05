const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    'test_db',
    'root',
   'mysqldb123',
 {
   host: 'localhost',
   dialect:'mysql',
 }
);
sequelize.authenticate().then(()=>{
  console.log("db conneceted");
  })
  .catch(error=>{
  console.log(error);
  })
module.exports=sequelize;