import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from './Context';


class ProductList extends Component {
    
    render() {
      
        return(
            <React.Fragment>
                 <div className="slider">
                <div className="container sliderimage">
                    <div className="row">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-fluid d-block " src={require('../gambar/slide1.jpg')} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid d-block " src={require('../gambar/slide2.jpg')} />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid d-block " src={require('../gambar/slide3.jpg')} />
                                    </div>

                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                                </div>
                            </div>
                    </div>
                </div>
                

             
            </div>
            
                <div className="py-5">
                    <div className="container">
                        <Title  name="Rekomendasi dari kami"/>
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

export default ProductList;