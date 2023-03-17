import React from 'react';
import { NavLink } from 'react-router-dom';
//import './Navbar.css';

function Navbar() {
    return (
        <div className="col-md-">
            <nav id="navBar" className="nav justify-content-end">
                <NavLink to="/" className="nav-item nav-link active">About Me</NavLink>
                <NavLink to="Work" className="nav-item nav-link">Work</NavLink>
                <NavLink to="Contact" className="nav-item nav-link">Contack Me</NavLink>
                <NavLink to="Skills" className="nav-item nav-link" tabIndex="-1">Skills</NavLink>
            </nav>
        </div>
    );
}

export default Navbar;