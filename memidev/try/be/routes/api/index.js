var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/hello', function (req, res, next) {
    res.send('hello')
});

router.get('/user', function (req, res, next) {
    res.send('user')
});


router.post('/user', function (req, res, next) {
    res.send('post')
});


router.use('/test', require('./test'))

router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없습니다'))
})

module.exports = router;
