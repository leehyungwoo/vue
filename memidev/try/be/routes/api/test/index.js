var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('test')
});

router.get('/hello', function (req, res, next) {
    res.send('hello')
});


router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없습니다'))
})

module.exports = router;
