const mongoose = require('mongoose');

var User = new mongoose.Schema({
    id: { type: String, unique: true, index: true, },
    name: String,
    gender: String,
    email: String,
    password: String,
    updated: { type: Date, },//Date.now
    regDate: { type: Date },  //Date.now
    deleteDate: { type: Date },//Date.now

});

module.exports = mongoose.model('users', User);