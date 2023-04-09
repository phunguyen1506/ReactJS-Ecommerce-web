import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div classNameName="hero">
            <div className="card text-bg-dark border-0">
                <img src="/assets/quanao.jpg" className="card-img" alt="Background" height="450px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div classNameName="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">BAN DO NE</h5>
                        <p className="card-text lead fs-2 ">MUA DO DI</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;
