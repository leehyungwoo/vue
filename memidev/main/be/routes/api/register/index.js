var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const crypto = require('crypto');
const User = require('../../../models/user')


router.post('/', (req, res) => {
    const u = req.body
    if (!u.id) return res.send({ success: false, msg: '아이디가 없습니다.' })
    if (!u.pwd) return res.send({ success: false, msg: '비밀번호가 없습니다.' })
    if (!u.name) return res.send({ success: false, msg: '이름이 없습니다.' })

    User.findOne({ id: u.id })
        .then((r) => {
            if (r) throw new Error('이미 존재하는 아이디입니다.')
            return User.create(u)
        })
        .then((r) => {
            const salt = r._id.toString();
            const pwd = crypto.scryptSync(r.pwd, salt, 64, { N: 1024 }).toString('hex');
            return User.updateOne({ _id: r._id }, { $set: { pwd, salt } })
        })
        .then((r) => {
            console.log('결과', r)
            res.send({ success: true, msg: '가입되었습니다' })
        })
        .catch((e) => {
            console.log(e)
            res.send({ success: false, msg: e.message })
        })
})

router.all('*', function (req, res, next) {
    next(createError(404, '그런 test 없어요'));
});

module.exports = router;
