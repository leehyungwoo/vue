var express = require('express');
var router = express.Router();



router.use('/api', require('./api'))


router.get('/test', function (req, res, next) {
    res.send('routes')
});



module.exports = router;
