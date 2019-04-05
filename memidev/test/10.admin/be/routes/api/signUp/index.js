var express = require('express');
var router = express.Router();
var userInfo = require('../../../models/userInfo')
var crypto = require('crypto')
router.get('/', function (req, res) {
    res.send('get. signUp root')
})


// crypto 암호화 


/* GET users listing. */
router.post('/', function (req, res) {
    const { id, name, gender, email, password } = req.body;


})








module.exports = router;
