var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
const cors = require('cors')
// var history = require('express-history-api-fallback')

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}
// app.use(history())


app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));
app.use('/api', require('./routes/api'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.send({ msg: err.message });
});


const mongoose = require('mongoose');
const User = require('./models/user.js')
console.log(`${process.env.NODE_ENV} started!`)

const cfg = require('../config')


mongoose.connect(cfg.dbUrl, { useNewUrlParser: true }, function (err, db) {
    if (err) {
        console.log('몽구스에러')
        return console.error(err);
    }
    console.log('몽구스커넥티드')
    // User.deleteMany().then(r => console.log(r))
    //     .catch(e => console.log(e))


    // User.create({name:'하하'})
    // .then( r =>console.log(r))
    // .catch(e=>console.log(e))

    // R
    // User.find()
    //    .then( r =>console.log(r))
    //    .catch(e=>console.log(e))

    //U
    // User.updateOne({_id: '5c78c02c97aed71158d3ca62'},{$set:{age:34}})
    //    .then( (r) =>{
    //       console.log(r)
    //       console.log('updated')
    //     return User.find();
    //    }).then( (r) =>{
    //       console.log(r) 
    //    })
    //    .catch(e=>console.log(e))

    //D
    // User.deleteOne({name:'하하'})
    //       .then( (r) =>{
    //       console.log(r)
    //       console.log('delete')
    //     return User.find();
    //    }).then( (r) =>{
    //       console.log(r) 
    //    })
    //    .catch(e=>console.log(e))     
})


// const aaa = (t) => {
//     return new Promise((resolve, reject) => {
//         console.log('a', new Date().toLocaleString())
//         setTimeout(() => {
//             reject(new Error('error났음'))
//             console.log('b', new Date().toLocaleString())
//             resolve('ok')
//         }, t)
//     })
// }

// aaa(2000).then(r => { console.log('r', r) })
//     .catch((e) => { console.log(e.message) })

module.exports = app;

// var jwt = require('jsonwebtoken');
// const key = "암호화방식의나만의어려운어려운키"
// var token = jwt.sign({ id: 'shine', email: 'leewoo@xxx.com' }, key);
// console.log(token) // bar
// var decoded = jwt.verify(token, key);
// console.log(decoded) // bar
// console.log(new Date(decoded.iat * 1000))

// const crypto = require('crypto');
// // Using the factory defaults.
// const key1 = crypto.scryptSync('1234', 'salt', 64);
// console.log('헥스', key1.toString('hex'));  // '3745e48...08d59ae'
// // Using a custom N parameter. Must be a power of two.
// const key2 = crypto.scryptSync('1233', 'salt', 64, { N: 1024 });
// console.log('헥스2', key2.toString('hex'));  // '3745e48...aa39b34'