import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from './Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal} = value;
                    const {Image, ProductName, Price}= value.modalProduct;

                    if(!modalOpen){
                        return null;

                    }else{
                        return(
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto py-2 col-md-8 col-lg-4 text-center text-capitalize">
                                        <h5>Barang di tambahkan ke keranjang</h5>
                                        <img src={Image} className="img-fluid" alt="product" />
                                        <h5>{ProductName}</h5>
                                        <h5 className="text-muted">Harga : Rp.{Price}</h5>
                                        <Link to="/" className="mr-2">
                                            <ButtonContainer onClick={()=> closeModal()}>
                                                Lanjut belanja
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={()=> closeModal()}>
                                                Ke keranjang
                                            </ButtonContainer>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;

const ModalContainer = styled.div`
    position : fixed;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    background : rgba(0,0,0,0.3);
    display: flex;
    align-items : center;
    #modal{
        background : var(--mainWhite);
    }
`;