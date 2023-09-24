import React from 'react';
import './Navbar.css';
import logo from '../../images/Logo.svg';
const Navbar = () => {
    return (
        <div className='nav-bar'>
            <img src={logo} alt="" />
            <div className='anchor'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div>
        </div>
    );
};

export default Navbar;