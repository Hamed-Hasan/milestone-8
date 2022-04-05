import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg'
const Navbar = () => {
    return (
        <nav>
           <a href="/">
           <img src={logo} alt="" />
           </a>
            <div>
                <a href="shop">Shop</a>
                <a href="inventory">Inventory</a>
                <a href="order">Order</a>
                <a href="about">About</a>
            </div>
        </nav>
    );
};

export default Navbar;