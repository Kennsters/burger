const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:K33nnyishere@localhost/burgers_db')

module.exports = db