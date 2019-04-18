const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
var User = new mongoose.Schema({
    name: { type: String, index: true, unique: true },
    age: { type: Number, default: 1 }
});

module.exports = mongoose.model('users', User);