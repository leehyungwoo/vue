var express = require('express');
var router = express.Router();
var createError = require('http-errors');

router.route('/').get(function (req, res) {
    res.send('hi')
})


router.use('/api', require('./api'))



router.all('*', function (req, res, next) {
    next(createError(404));
})

module.exports = router;
