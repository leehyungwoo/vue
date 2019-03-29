var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const jwt = require('jsonwebtoken');
const cfg = require('../../../config')
const moment = require('moment')
router.use('/sign', require('./sign'))
router.use('/register', require('./register'))
router.use('/site', require('./site'))


const verifyToken = (t) => {
    return new Promise((resolve, reject) => {
        if (!t) resolve({ id: 'guest', name: '손님', lv: 3 })
        if ((typeof t) !== 'string') reject(new Error('문자가 아닌 토큰 입니다.'))
        if (t.length < 10) resolve({ id: 'guest', name: '손님', lv: 3 })
        jwt.verify(t, cfg.jwt.secretKey, (err, v) => {
            if (err) reject(err)
            resolve(v)
        })
    })

}
router.all('*', function (req, res, next) {
    // 토큰 검사
    const token = req.headers.authorization
    verifyToken(token)
        .then(v => {
            console.log(v)
            console.log(new Date(v.exp * 1000))
            req.user = v
            next()
        })
        .catch(e => res.send({ success: false, msg: e.message }))
})

const getToken = async (t) => {
    let vt = await verifyToken(t)
    if (vt.lv > 2) return { user: vt, token: null }
    const diff = moment(vt.exp * 1000).diff(moment(), 'seconds')
    // return vt
    console.log(diff)
    if (diff > (vt.exp - vt.iat) / cfg.jwt.expiresInDiv) return { user: vt, token: null }

    const nt = await signToken(vt.id, vt.lv, vt.name, vt.rmb)
    vt = await verifyToken(nt)
    return { user: vt, token: nt }
}

router.all('*', function (req, res, next) {
    // 토큰 검사
    getToken(req.headers.authorization)
        .then((v) => {
            req.user = v.user
            req.token = v.token
            next()
        })
        .catch(e => res.send({ success: false, msg: e.message }))
})
router.use('/page', require('./page'))
router.use('/manage', require('./manage'))


router.all('*', function (req, res, next) {
    if (req.user.lv > 2) return res.send({ success: false, msg: '권한이 없습니다' })
    next()
})

router.use('/test', require('./test'));
router.use('/user', require('./user'));




router.all('*', function (req, res, next) {
    next(createError(404, '그런 test 없어요'));
});

module.exports = router;
