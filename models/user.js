const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    role: { type: Number, default: 0 }
});

userSchema.plugin(passportLocalMongoose, {usernameUnique: false})
module.exports = mongoose.model('User', userSchema);

