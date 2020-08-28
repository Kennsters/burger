const orm = require('../config/orm.js')

const models = { }

models.getAll = (cb) => {
    orm.selectAll('burgers', burgers => cb(burgers))
}

models.createOne = (burgers, cb) => {
    orm.insertOne('burgers', burgers, id => cb(id))
}

models.updateOne = (updates, where, cb) => {
    orm.updateOne('burgers', updates, where, () => cb())
}

module.exports = models