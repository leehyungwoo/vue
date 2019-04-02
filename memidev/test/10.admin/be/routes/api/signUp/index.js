var express = require('express');
var router = express.Router();
var userInfo = require('../../../models/userInfo')

/* GET users listing. */
router.get('/', function (req, res) {
    userInfo(`INSERT INTO userinfo (id,name,gender,email,password,regDate) VALUES (?,?,?,?,?,now())`, ['test', 'name', 'gender', 'email', 'password'])
        .then((r => {
            console.log(r);
            res.send('성공')
        }))
        .catch((e) => {
            console.log(e);
            res.send('실패')
        })
});



module.exports = router;
