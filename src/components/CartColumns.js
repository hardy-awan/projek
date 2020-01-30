import React from 'react';

export default function CartColumns () {
    return (
        <div>
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> produk </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> nama produk </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> harga </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> jumlah </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> hapus </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase"> total </p>
                    </div>
                </div>
            </div>
        
        </div>
    )
};