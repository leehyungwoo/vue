var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('index');
});

router.use('/users', require('./users'))

router.get('/*', function (req, res, next) {
    res.send('없는페이지')
})
module.exports = router;
