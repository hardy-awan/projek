const userController = require('../controller/userController')
const cartController = require('../controller/cartController')
const signUpcontroller= require('../controller/signUPController')
const loginController = require('../controller/loginController')
const productsController= require('../controller/productController')

module.exports = app => {
    app.get('/', productsController.home)

    //api products
    app.get('/products', productsController.listProduct)
    app.get('/products/:id', productsController.detailProduct)
    app.post('/products/', productsController.tambahProduct)
    app.put('/products/:id', productsController.ubahProduct)
    app.delete('/products/:id', productsController.hapusProduct)

    //api user
    app.get('/user', userController.listUser)
    app.post('/user/login', loginController.loginUser )
    app.get('/user/profile', userController.detailUser)
    app.put('/user/profile', userController.ubahUser)
    app.delete('/user/:id', userController.hapusUser)

    //api signup
    app.post('/user/signup', signUpcontroller.tambahUser)


    //api cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

}
