var express = require('express');
var router = express.Router();


router.route('/').get(function (req, res, next) {
    res.send('api')
})

router.use('/user', require('./user'))

module.exports = router;
