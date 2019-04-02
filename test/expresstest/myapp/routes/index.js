var express = require('express');
var router = express.Router();

var usersRouter = require('./users/users')
var testRouter = require('./test/test');

router.use('/users', usersRouter);
router.use('/test', testRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
