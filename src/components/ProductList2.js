import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from './Context';


class ProductList2 extends Component {
    
    render() {
      
        return(
            <React.Fragment>
            
            
                <div className="py-5">
                    <div className="container">
                        <Title  name="Produk Kami"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                   return value.products.map(product=> {
                                       return <Product key={product.index} product={product}/>
                                   })
                                }}

                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

           // <div>
              //  <Product/>
           // </div>
        );
    }
}

export default ProductList2;