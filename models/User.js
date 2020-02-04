const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String,
    accountAddress: String,
    privateKey: String,
    password: String,
})

mongoose.model('users', userSchema);