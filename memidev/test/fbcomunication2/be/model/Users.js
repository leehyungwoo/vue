var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: { type: String, index: true, unique: true },
    age: { type: Number },
});

module.exports = mongoose.model('Users', User);