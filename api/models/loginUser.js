const mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlegth: 3
    },
},
{
    timestamps: true

})

var User = module.exports = mongoose.model('login', UserSchema)