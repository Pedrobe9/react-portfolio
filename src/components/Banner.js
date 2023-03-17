import React from 'react';
import avatar from './assets/avatar.png'
//import './Banner.css'

function Banner() {
    return (
        <section className="banner jumbotron jumbotron-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img className="avatar" src={avatar} alt="Avatar of developer" />
                </div>
                <div className="col-lg-7">
                    <h2 className="banner-txt display-4">Hello, world!</h2>
                    <h3 className="banner-txt ">Best things I have done so far</h3>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Banner;