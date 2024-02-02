const mysql = require('mysql2')
const db =mysql.createPool({
    host:'loacalhost',
    user:'root',
    password:'mysqldb123',
    database:'test_db',
    dialect:'mysql'
})
module.exports=db.promise()