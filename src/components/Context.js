import React, { Component } from 'react';
import {storeProducts, detailProduct} from '../data';
//import dataa from '../productss.json';
import  axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct:detailProduct,
        cart : [],
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubtotal : 0,
        cartTax : 0,
        cartTotal : 0,

    }

    componentDidMount(){
       //fetch('http://localhost:3000/data')
      // .then(response => response.json())
       // .then(json => console.log(json))

        axios.get('http://localhost:3000/data')
        .then((result)=>{
           this.setState({
               products: result.data
            })
        }
        )
        this.setProducts();
    }

    
    setProducts = () => {
        let tempProduct = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProduct = [...tempProduct,singleItem];
        })
        this.setState(() => {
            return {products:tempProduct};

        });
    }
   

    getItem =index => {
        const product = this.state.products.find(item=> item.index === index) ;
        return product;
    }
        
    
        handleDetail = index => {
            const product = this.getItem(index);
            this.setState(() =>{
                return {detailProduct:product}
            })
        }
        addToCart = index => {
           let tempProducts=[...this.state.products];
           const indexx = tempProducts.indexOf(this.getItem(index));
           const product = tempProducts[indexx];
           product.inCart = true;
           product.count= 1;
           const price = product.Price;
           product.total = price;
           this.setState(()=>{
               return{products: tempProducts, cart:[...this.state.cart,product]};
           },
           () =>{
               this.addTotals();
           }
           )
        }
    
        openModal = index =>{
            const product= this.getItem(index);
            this.setState(() =>{
                return {modalProduct:product, modalOpen:true}
            })
        }
    
        closeModal = index =>{
            this.setState(() =>{
                return {modalOpen:false}
            })
        }
    
        increase = index =>{
           let tempCart = [...this.state.cart];
           const selectedProduct = tempCart.find(item => item.index === index)
           const indexx = tempCart.indexOf(selectedProduct);
           const product = tempCart [indexx];
    
           product.count = product.count + 1;
           product.total = product.count * product.Price;
    
           this.setState(()=>{
               return{cart:[...tempCart]}
           },
           ()=>{
               this.addTotals()
           })
        }
    
        decrease = index => {
            let tempCart = [...this.state.cart];
           const selectedProduct = tempCart.find(item => item.index === index)
           const indexx = tempCart.indexOf(selectedProduct);
           const product = tempCart [indexx];
    
           product.count = product.count - 1;
           if(product.count===0){   
               this.removeItem(index);
           }else{
           product.total = product.count * product.Price;
           this.setState(()=>{
            return{cart:[...tempCart]}
        },
        ()=>{
            this.addTotals()
        })
           }
        }
    
        removeItem = index => {
            let tempProducts = [...this.state.products];
            let tempCart = [...this.state.cart];
    
            tempCart= tempCart.filter(item => item.index !== index);
    
            const indexx = tempProducts.indexOf(this.getItem(index));
            let removeProduct = tempProducts [indexx];
            removeProduct.inCart = false;
            removeProduct.count = 0;
            removeProduct.total = 0;
    
            this.setState(()=>{
                return{
                    cart : [...tempCart],
                    products : [...tempProducts]
                };
            },()=>{
                this.addTotals();
            })
        }
    
        clearCart = () => {
           this.setState(()=>{
               return {cart:[]};
           },()=>{
             
               this.addTotals();
           });
        }
    
        addTotals = () => {
            let subtotal = 0;
            this.state.cart.map(item => (subtotal += item.total));
            const tempTax = subtotal * 0.1;
            const tax = parseFloat (tempTax.toFixed(2));
            const total = subtotal + tax ;
            this.setState(() => {
                return{
                    cartSubtotal : subtotal,
                    cartTax : tax,
                    cartTotal : total,
                }
            })
        }
    
        render() {
    
            return (
                <ProductContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart, openModal:this.openModal, closeModal:this.closeModal,
                increase:this.increase,
                decrease: this.decrease,
                removeItem:this.removeItem,
                clearCart: this.clearCart
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            );
        }
    }
    
    const ProductConsumer = ProductContext.Consumer;
    
    export {ProductProvider,ProductConsumer};