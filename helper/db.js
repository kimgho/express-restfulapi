const mysql = require('mysql')

module.exports = mysql.createConnection({
    database:"restapi",
    port:3306,
    host:"localhost",
    user:"root",
    password:"root"
})