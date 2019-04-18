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
            res.send({ success: false, msg: e.message })
        })
})


router.put('/:id', function (req, res, next) {
    const id = req.params.id
    const { name, age } = req.body;
    User.updateOne({ _id: id }, { $set: { name, age } })
        .then(r => {
            res.send({ success: true, msg: r })
        }).catch(e => {
            res.send({ success: false, msg: e.message })
        })
    res.send({ success: true, msg: 'put ok' })
})

router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    User.deleteOne({ _id: id })
        .then(r => {
            res.send({ success: true, msg: r })
        }).catch(e => {
            res.send({ success: false, msg: e.message })
        })
    res.send({ success: true, msg: 'delete ok' })
})




router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없습니다'))
})

module.exports = router;
