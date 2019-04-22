var express = require('express');
var router = express.Router();
var User = require('../../../model/Users')
/* GET home page. */
// router.use('/api', require('./api'))
router.get('/', function (req, res, next) {
    User.find()
        .then(r => {
            console.log('조회')
            console.log(r)
            res.send({ success: true, users: r })
        }).catch(e => {
            console.error('조회실패')
            res.send({ success: false, msg: e.message })
        })
});

router.post('/', function (req, res, next) {
    const { name, age } = req.body
    new User({
        name,
        age
    }).save()
        .then(r => {
            console.log('등록')
            res.send({ success: true, msg: '등록되었습니다' })
        }).catch(e => {
            console.error('등록실패')
            res.send({ success: false, msg: e.message })
        })
});

router.put('/', function (req, res, next) {
    const { name, age, _id } = req.body
    User.updateOne({ _id }, { $set: { name, age } })
        .then(r => {
            console.log('수정')
            res.send({ success: true, msg: '수정되었습니다' })
        }).catch(e => {
            console.error('수정실패')
            res.send({ success: false, msg: e.message })
        })
});

router.delete('/', function (req, res, next) {
    const _id = req.query._id
    User.deleteOne({ _id })
        .then(r => {
            console.log('제거')
            res.send({ success: true, msg: '제거되었습니다' })
        }).catch(e => {
            console.error('제거실패')
            res.send({ success: false, msg: e.message })
        })
});


router.all('*', function (req, res, next) {
    next(createError(404));
})

module.exports = router;
