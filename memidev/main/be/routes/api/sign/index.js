var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const cfg = require('../../../../config')
const User = require('../../../models/user')

<<<<<<< HEAD
const signToken = (_id, id, lv, name, rmb) => {
=======
const signToken = (id, lv, name, rmb) => {
>>>>>>> parent of 4c44dca... 게시판 게시물 api 만들기
    return new Promise((resolve, reject) => {
        const o = {
            issuer: cfg.jwt.issuer,
            subject: cfg.jwt.subject,
            expiresIn: cfg.jwt.expiresIn, // 3분
            algorithm: cfg.jwt.algorithm
        }
        if (rmb) o.expiresIn = cfg.jwt.expiresInRemember // 6일
<<<<<<< HEAD
        jwt.sign({ _id, id, lv, name }, cfg.jwt.secretKey, o, (err, token) => {
            if (err) reject(err)
=======
        jwt.sign({ id, lv, name, rmb }, cfg.jwt.secretKey, o, (err, token) => {

            if (err) {

                reject(err)
            }
>>>>>>> parent of 4c44dca... 게시판 게시물 api 만들기
            resolve(token)
        })
    })
}


router.post('/in', (req, res) => {
    const { id, pwd, remember } = req.body
    if (!id) return res.send({ success: false, msg: '아이디가 없습니다.' })
    if (!pwd) return res.send({ success: false, msg: '비밀번호가 없습니다.' })
    if (remember === undefined) return res.send({ success: false, msg: '기억하기가 없습니다.' })
<<<<<<< HEAD

=======
>>>>>>> parent of 4c44dca... 게시판 게시물 api 만들기
    User.findOne({ id })
        .then((r) => {
            if (!r) throw new Error('존재하지 않는 아이디입니다.')
            const p = crypto.scryptSync(pwd, r._id.toString(), 64, { N: 1024 }).toString('hex')
            if (r.pwd !== p) throw new Error('비밀번호가 틀립니다.')
<<<<<<< HEAD
            return signToken(r._id, r.id, r.lv, r.name, remember)
=======
            return signToken(r.id, r.lv, r.name, remember)
>>>>>>> parent of 4c44dca... 게시판 게시물 api 만들기
        })
        .then((r) => {
            res.send({ success: true, token: r })
        })
        .catch((e) => {
            res.send({ success: false, msg: e.message })
        })
})

<<<<<<< HEAD
router.post('/out', (req, res) => {
    res.send({ success: false, msg: '아직 준비 안됨.' })
})

router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없어'));
=======

router.post('/out', function (req, res) {
    res.send({ success: false, msg: '아직 준비 안됨' });
});

router.all('*', function (req, res, next) {
    next(createError(404, '그런 test 없어요'));
>>>>>>> parent of 4c44dca... 게시판 게시물 api 만들기
});

module.exports = router;
