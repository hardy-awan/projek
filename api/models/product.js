var mongoose = require('mongoose')

var ProductSchema = mongoose.Schema({
    nama_produk: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image :{ 
        type: String
    },
    
},
{
    timestamps: true

})

var Product = module.exports = mongoose.model('products', ProductSchema)