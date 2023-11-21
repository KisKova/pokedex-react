import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Logo from "../Pokédex_logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/"><div className="logo"><img src={Logo} alt="Logo"/></div></Link>
                <ul className="navbar-elements">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;