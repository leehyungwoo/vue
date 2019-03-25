var express = require('express');
var router = express.Router();



router.use('*', (req, res, next) => {
    req.test = "hi"
    next()
})
router.get('/a', (req, res) => {
    console.log(req)
    res.send(req.test)

})






module.exports = router;
