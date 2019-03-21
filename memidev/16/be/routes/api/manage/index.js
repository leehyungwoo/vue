var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.all('*', function (req, res, next) {
    if (req.user.lv > 0) return res.send({ success: false, msg: '권한이 없습니다' })
    next()
})

router.use('/user', require('./user'));
router.use('/page', require('./page'))


router.all('*', function (req, res, next) {
    next(createError(404, '그런 test 없어요'));
});

module.exports = router;
