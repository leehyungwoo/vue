var express = require('express');
var router = express.Router();
var userModel = require('../../../models/userInfo')
var crypto = require('crypto')
router.get('/', function (req, res) {
    res.send('get. signUp root')
})


// crypto 암호화 


/* GET users listing. */
router.post('/', function (req, res) {
    const { id, name, gender, email, password } = req.body;
    // console.log(id, name, gender, email, password)
    new userModel({
        id,
        name,
        password,
        email,
        password,
        gender
    }).save((err) => {
        console.log(err)  //아래 주석 에러
        //     if (err) {
        //         if (err.code === 11000) {
        //             return res.json({ success: false, msg: '아이디값 중복' })
        //         }
        //         return res.json({ success: false, msg: '가입 에러' })
        //     }

        //     if (!err.code) {
        //         return res.json({ success: true, msg: '가입완료' })
        //     }
        // })

    })



    module.exports = router;
