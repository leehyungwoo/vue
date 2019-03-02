var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/user')
const us = [
    { name: '김김김', age: 14 },
    { name: '이이이', age: 24 }
];

router.get('/', function (req, res, next) {
    User.find()
        .then((r) => {
            console.log('성공')
            res.send({ success: true, users: r });
        }).catch((err) => {
            return console.error(err)
        })
});

router.post('/', function (req, res, next) {
    const { name, age } = req.body
    const u = new User({
        name,
        age
    })
    console.log(u)
    u.save().then((r) => {
        res.send({ success: true, msg: r });
    }).catch((err) => {
        return console.error(err)
    })
});

router.put('/:id', function (req, res, next) {
    const id = req.params.id
    const { name, age } = req.body
    User.updateOne({ _id: id }, { $set: { name, age } })
        .then((r) => {
            res.send({ success: true, msg: r });
        }).catch((err) => {
            return console.error(err)
        })
    // res.send({ success: true, msg: 'put ok' });
});

router.delete('/:id', function (req, res, next) {
    const id = req.params.id
    User.deleteOne({ _id: id })
        .then((r) => {
            res.send({ success: true, msg: r });
        }).catch((err) => {
            return console.error(err)
        })
    res.send({ success: true, msg: 'delete ok' });
});


router.all('*', function (req, res, next) {
    next(createError(404, '그런 test 없어요'));
});

module.exports = router;
