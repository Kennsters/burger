const orm = require('../config/orm.js')

const models = { }

models.getAll = (cb) => {
    orm.selectAll('burgers', burgers => cb(burgers))
}

models.createOne = (grocery, cb) => {
    orm.insertOne('burgers', burgers, id => cb(id))
}

models.updateOne = (updates, where, cb) => {
    orm.updateOne('burgers', where, () => cb())
}

module.exports = models