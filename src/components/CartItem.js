import React from 'react';

export default function CartItem ({item,value}) {
    const{index,ProductName,Image,Price,total,count} = item;
    const{increase,decrease,removeItem} = value;
    return(        
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                src={Image}
                style={{width:"5rem", height:"5rem"}}
                className="img-fluid"
                alt="product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2"> 
            <span className="d-lg-none">product :</span>
            {ProductName}
            </div>
            <div className="col-10 mx-auto col-lg-2"> 
            <span className="d-lg-none">price :</span>
           Rp.{Price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0"> 
            <div className="d-flex justify-content-center">
                <div>
                    <span className="btn btn-black mx-1" onClick={()=>decrease(index)}>-</span>
                    <span className="btn btn-black mx-1" >{count}</span>
                    <span className="btn btn-black mx-1" onClick={()=>increase(index)}>+</span>
                    
                </div>
            </div>
            </div>

            <div className="col-10 mx-auto col-lg-2"> 
            <div className="cart-icon" onClick={()=>removeItem(index)}>
                <i className="fas fa-trash"></i>
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2"> 
    <strong className="d-lg-none">item total : </strong><strong> Rp. {total}</strong>
            </div>

        </div>

    );
};