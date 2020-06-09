const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    password : String
});

userSchema.plugin(passportLocalMongoose, {usernameUnique: false})
module.exports = mongoose.model('Users', userSchema);
