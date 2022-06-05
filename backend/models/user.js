const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    cin : String,
    password : String,
    salary : String,
    tel : String,
    birthday : String,
    role : String
})

module.exports = mongoose.model('User', userSchema)
