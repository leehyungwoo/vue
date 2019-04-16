var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('api루트')
})
router.use('/test', require('./test'))
router.use('/user', require('./user'))

router.all('*', function (req, res, next) {
    next(createError(404, '그런 api 없습니다'))
})

module.exports = router;
