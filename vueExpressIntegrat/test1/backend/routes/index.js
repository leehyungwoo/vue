var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'index.html')) //**추가
});

module.exports = router;