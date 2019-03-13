var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
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
console.log(cfg)

mongoose.connect(cfg.dbUrl, { useNewUrlParser: true }, function (err, db) {
    if (err) {
        console.log('몽구스에러')
        return console.error(err);
    }
    console.log('몽구스커넥티드')
    // User.deleteMany().then( r =>console.log(r))
    // .catch(e=>console.log(e))


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



module.exports = app;


