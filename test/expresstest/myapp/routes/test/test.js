var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('test');
});

router.get('/asd', function (req, res, next) {
    res.send('test / asd');
});


router.post('/asd', function (req, res, next) {
    res.send('test / asd');
});


router.put('/asd', function (req, res, next) {
    res.send('test / asd');
});

router.delete('/asd', function (req, res, next) {
    res.send('test / asd');
});



module.exports = router;
