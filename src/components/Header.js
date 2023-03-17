import React from 'react';
import Navbar from "./Navbar";
import Banner from "./Banner";
//import './Header.css'

function Header() {
    return (
        <header>
            <section className="header container">
                <h1 className="navbar-brand">Pedro Bernal</h1>
                <div className="row"> 
                    <Navbar />
                </div>
            </section>
            <Banner />
        </header>
    );
}

export default Header;