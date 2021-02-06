const mysql = require('mysql');
const process = require('process');
const host = process.env.REMOTE_HOST
const user = process.env.SQL_USER
const pass = process.env.SQL_PASS
const db = process.env.SQL_DB
const dbport = "3306"
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: pass,
    database: db,
    multipleStatements: true,
    port: dbport,
});

connection.connect(err =>{
    if(err){
        console.log(`Error has been Occured ${err}`)
    }else{
        console.log('Database has been Connected')
    }
})

module.exports = connection
