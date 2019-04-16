const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, default: '', unique: true, index: true },
    age: { type: Number, default: 1 }
})

const User = mongoose.model('User', userSchema);  //몽구스는 자체적으로 promise를 return 해준다

module.exports = User