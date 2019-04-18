var express = require('express');
var router = express.Router();
const User = require('../../../model/user')

router.get('/', function (req, res, next) {
    // console.log(req.query)
    User.find()
        .then(r => {
            if (r.length === 0) {
                res.send({ success: true, msg: '값이 없습니다' })
            }

            res.send({ success: true, users: r })
        }).catch(e => {
            res.send({ success: false, msg: e })
        })
})
router.post('/', function (req, res, next) {
    const { name, age } = req.body

    new User({
        name,
        age
    }).save().then(r => {
        res.send({ success: true, msg: r })
    }).catch(e => {
        res.send({ success: false, msg: e })
    })
})

router.put('/', function (req, res, next) {
    console.log(req.body)
    const { id, name, age } = req.body
    console.log(id)
    console.log(name)
    console.log(age)
    User.updateOne({ _id: id }, { $set: { name, age } })
        .then(r => {
            res.send({ success: true, msg: r })
        })
        .catch(e => {
            res.send({ success: false, msg: e })
        })
})
router.delete('/:id', function (req, res, next) {
    var { id } = req.params

    User.deleteOne({ _id: id })
        .then(r => {
            res.send({ success: true, msg: r })
        }).catch(e => {
            res.send({ success: false, msg: e })
        })
})


module.exports = router;
