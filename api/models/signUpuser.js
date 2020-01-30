const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

var UserSchema = mongoose.Schema({
    nama_lengkap: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 30
    },
    alamat: {
        type: String,
        require: true,
        minlength: 4
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },

    isAdmin: Boolean

},
{
    timestamps: true

})

UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, 'jwtPrivateKey');
    return token
} 

var User = module.exports = mongoose.model('user', UserSchema)