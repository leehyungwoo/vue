var express = require('express');
var router = express.Router();
var userInfo = require('../../../models/userInfo')
var crypto = require('crypto')
router.get('/', function (req, res) {
    res.send('get. signUp root')
})


// crypto 암호화 


/* GET users listing. */
router.post('/', function (req, res) {
    const { id, name, gender, email, password } = req.body;
    crypto.randomBytes(64, (err, buf) => {
        const salt = buf.toString('base64');
        const cryptoPwd = crypto.scryptSync(password, salt, 64).toString('hex');
        userInfo(`INSERT INTO userinfo (id,name,gender,email,password,salt,regDate) VALUES (?,?,?,?,?,?,now())`, [id, name, gender, email, cryptoPwd, salt])
            .then(r => {
                res.json({ success: true, msg: '가입 완료' })
            }).catch(e => {
                if (e.sqlMessage.indexOf('id_UNIQUE') > -1) {
                    return res.json({ success: false, msg: '이미 있는 아이디입니다' })
                }
                res.json({ success: false, msg: '가입 실패' })
            })
    })
})








module.exports = router;
