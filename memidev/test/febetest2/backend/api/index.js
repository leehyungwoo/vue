var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send('api진입')
})

router.use('/movie', require('./movie/'))


module.exports = router;
