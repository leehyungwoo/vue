var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var cfg = require("../../../config")


router.use('/signUp', require('./signUp'))


router.all('*', function (req, res, next) {
    const token = req.headers.authorization

    if (!token === 'null') {
        jwt.verify(token, cfg.privateKey, (err, userInfo) => {
            if (err) {
                console.log('토큰확인에러', err)
                throw err;
            }
            res.json({ userInfo })
        })
        next()
    } else {
        next()
    }

});


router.use('/login', require('./login'))



module.exports = router;
