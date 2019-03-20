var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const Page = require('../../../../models/pages')


router.get('/', function (req, res, next) {
    Page.find()
        .then((r) => {
            console.log('성공')
            res.send({ success: true, users: r });
        }).catch((err) => {
            return console.error(err)
        })
});

router.put('/:_id', function (req, res, next) {
    const _id = req.params._id
    Page.updateOne({ _id }, { $set: req.body })
        .then((r) => {
            res.send({ success: true, msg: r });
        }).catch((err) => {
            return console.error(err)
        })
    // res.send({ success: true, msg: 'put ok' });
});

router.delete('/:_id', function (req, res, next) {
    const _id = req.params._id
    Page.deleteOne({ _id })
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
