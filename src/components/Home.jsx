import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
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
                
                
        );
       

    }
}

export default Home;