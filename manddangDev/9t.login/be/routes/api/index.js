var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.send('웰컴to api');
});
router.post('/user', function (req, res, next) {
    /* DB저장소에 넣으면 됌 */
    console.log(req.body)
});


module.exports = router;
