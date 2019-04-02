var express = require('express');
var router = express.Router();

router.use('/signUp', require('./signUp'));

// /* GET home page. */
router.get('/', function (req, res, next) {
    res.send('api뎁스');
});

module.exports = router;
