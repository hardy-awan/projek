import React, {Component} from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return(
            <ProductConsumer>
                {value =>{
                    const {index, company, Image, info, Price, ProductName, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                            <div className="col-10 mx-auto col-md-6  my-3 text-center">
                                <img src ={Image} className="img-fluid" alt="Product"/>
                    
                                </div>
                                <div className="col-10 mx-auto text-center text-slanted text-capitalize text-blue my-5">
                    <h1>{ProductName}</h1>
               
                <h4 className="text-blue"><strong>Harga : Rp.{Price} </strong></h4>
              
                <div>
                    <Link to="/">
                        <ButtonContainer className="mr-2">Kembali</ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled= {inCart?true:false}
                    onClick={()=>{
                        value.addToCart(index)
                        value.openModal(index);
                    }}
                    >
                        {inCart?"In Cart":"Tambah ke keranjang"}
                   

                   </ButtonContainer>


                </div>
                                </div>
                            </div>
                    
                        </div>
                    )
                    
                }}
            </ProductConsumer>
        );
    }
}

export default Details;