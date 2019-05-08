var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
    app.use(cors());
}
app.use('/api', require('./routes/api'));
app.use(express.static(path.join(__dirname, '..', 'fe', 'dist')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, '없는페이지'));
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

module.exports = app;

const mongoose = require('mongoose');
// const User = require('./model/users')
mongoose.connect('mongodb://localhost:27017/nemv', { useNewUrlParser: true }, (err) => {
    if (err) { return console.error(err) }
    console.log('mongoose connected!')
})


// User.create({ name: '하하' })
//     .then((r) => {
//         console.log(r)
//     }).catch((e) => {
//         console.error(e)
// })


// User.find()
//     .then((r) => {
//         console.log(r)
//     }).catch((e) => {
//         console.error(e)
//     })


// User.updateOne({ _id: '5cb5bc09c0f41c072c859c0f' }, { $set: { age: 34 } })
//     .then((r) => {
//         console.log('updated')
//         console.log(r)
//         return User.find()
//     })
//     .then((r) => {
//         console.log(r)
//     }).catch((e) => {
//         console.error(e)
//     })


// User.deleteOne()
//     .then(r => {
//         console.log(r)
//         return User.find()
//     })
//     .then(r => {
//         console.log(r)
//     })
//     .catch(e => {
//         console.error(e)
//     })

console.log(process.env.NODE_ENV)