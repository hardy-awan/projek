import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value ;
    return(
        <React.Fragment>
            <div className="container">  
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/cart">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                            Hapus keranjang
                        </button>
                    </Link>
                    <h5>
                    <strong>
                        <span >subtotal : </span>
                        Rp. {cartSubtotal}
                    </strong>
                    </h5>
                    <h5>
                    <strong>
                        <span >pajak : </span>
                        Rp. {cartTax}
                    </strong>
                    </h5>
                    <h5>
                    <strong>
                        <span>total : </span>
                        Rp. {cartTotal}
                    </strong>
                    </h5>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};