var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var cfg = require("../../../config")


router.use('/test', require('./test'))
router.use('/signUp', require('./signUp'))



router.use('*', function (req, res, next) {
    console.log('미들웨어 in')
    const token = req.headers.authorization

    if (token !== 'null') {
        jwt.verify(token, cfg.privateKey, (err, userInfo) => {
            if (err) {
                console.log('토큰확인에러', err)
                throw err;
            }
            console.log('순차1토큰', userInfo)
            req.user = userInfo;
            next()
        })


    } else if (token === 'null') {   // ************ 로컬스토리지가 문자열 null일때 req.user.level을 3으로 설정해줘야한다.
        req.user = { level: 3 } //초기 레벨값
        console.log(req.user)
        next();
    } else {
        next()
    }

});


router.use('/login', require('./login'))
router.use('/page', require('./page'))


module.exports = router;
