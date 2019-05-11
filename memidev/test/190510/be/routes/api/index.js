var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('api Pageb');
});

router.use('/user', require('./user'));






module.exports = router;
