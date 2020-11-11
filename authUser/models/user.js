var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String,
    phoneno:Number,
    joined: { type: Date, default: Date.now },
  });
const User = mongoose.model('User', userSchema);
module.exports = User;