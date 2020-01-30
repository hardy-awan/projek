const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        minlength: 3,
        
    },
    isAdmin: Boolean
},
{
    timestamps: true

})




var User = module.exports = mongoose.model('users', UserSchema)