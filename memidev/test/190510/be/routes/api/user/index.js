var express = require('express');
var router = express.Router();
var User = require('../../../model/user')
const crypto = require('crypto');



/* 회원가입 */
router.post('/signUp', function (req, res, next) {
    var { id, password } = req.body

    crypto.randomBytes(64, (err, buf) => {
        if (err) {
            res.send({ success: false, msg: '회원가입 서버에러' })
            return err
        }
        var salt = buf.toString('base64');
        password = crypto.scryptSync(password, salt, 64, { N: 1024 }).toString('hex');;
        new User({
            id,
            password,
            salt
        }).save().then(r => {
            res.send({ success: true, msg: '회원가입 성공' })
        }).catch(e => {
            console.log(e)
            res.send({ success: false, msg: '회원가입 실패' })
        })
    })
    //pm2 ecosystem
});


//로그인
router.post('/login', function (req, res, next) {
    var inputId = req.body.id
    var inputPassword = req.body.password

    User.findOne({ id: inputId }).then(r => {
        var userPwd = crypto.scryptSync(inputPassword, r.salt, 64, { N: 1024 }).toString('hex');
        if (r.password === userPwd) {
            res.send({ success: true, msg: '로그인' })
        } else {
            res.send({ success: false, msg: '로그인 비밀번호가 틀립니다' })
        }
    }).catch(e => {
        res.send({ success: false, msg: '로그인 아이디를 확인해주세요' })
    })

})

module.exports = router;
