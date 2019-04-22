var express = require('express');
var router = express.Router();
/* GET home page. */
router.use('/user', require('./user'))
router.get('/', function (req, res, next) {
    res.send('user')
});



router.all('*', function (req, res, next) {
    next(createError(404));
})

module.exports = router;
