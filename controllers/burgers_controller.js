const orm = require('../config/orm.js')
const router = require('express').Router()
const burgers = require('../models/burger.js')

//get all groceries
router.get('/burgers', (req, res) => {
   burgers.getAll(yes => {
       res.json(yes)
   })
})

//create one burger
router.post('/burgers', (req, res) => {
    burgers.createOne(req.body, id => {
        res.json({ id })
    })
})

//edit one burger
router.put('/burgers/:id', (req, res) => {
    burgers.updateOne(req.body, { id: req.params.id }, () => {
        res.sendStatus(200)
    })
})

module.exports = router