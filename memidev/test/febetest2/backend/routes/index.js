var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send('route진입')
})

router.all('*', function (req, res, next) {
    res.send('예외페이지')
})

module.exports = router;
