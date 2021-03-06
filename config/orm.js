const db = require('./connection.js')

const orm = {}

// get
orm.selectAll = (table, cb) => {
    db.query(`SELECT * FROM ${table}`, (err, data) => {
        if (err) {
            console.log(err)
        }
        cb(data)
    })
}


// post 
orm.insertOne = (table, data, cb) => {
    db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
        if (err) {
            console.log(err)
        }
        cb(fields.insertId)
    })
}


// put
orm.updateOne = (table, updates, where, cb) => {
    db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, where], err => {
        if (err) {
            console.log(err)
        }
        cb()
    })
}


module.exports = orm