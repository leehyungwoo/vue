const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const User = require('../../../model/users')

const us = [
    { name: '김김김', age: 14 },
    { name: '이이이', age: 24 }
]


router.get('/', function (req, res, next) {
    User.find()
        .then(r => {
            res.send({ success: true, users: r })
        }).catch(e => {
            console.error(e)
            res.send({ success: false })
        })
});

router.post('/', function (req, res, next) {
    const { name, age } = req.body;
    const u = new User({ name, age })
    u.save()
        .then(r => {
            res.send({ success: true, msg: r })
        }).catch(e => {
            console.error(e)
            res.send({ success: false, msg: e.message })
        })
})

router.put('/', function (req, res, next) {
    console.log(req.body)
    res.send({ success: true, msg: 'put ok' })
})

router.delete('/', function (req, res, next) {
    console.log(req.query)
    res.send({ success: true, msg: 'delete ok' })
})




router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없습니다'))
})

module.exports = router;
