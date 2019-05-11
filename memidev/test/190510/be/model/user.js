var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    id: { type: String, unique: true, index: true },
    password: String,
    salt: String
});

var User = mongoose.model('users', userSchema);




module.exports = User