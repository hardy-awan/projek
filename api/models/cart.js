var mongoose = require('mongoose')

var CartSchema = mongoose.Schema({
    userCart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    productCart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    qtyCart: {
        type: Number,
        required: true
    },

    
},
{
    timestamps: true

})

var Cart = module.exports = mongoose.model('cart', CartSchema)