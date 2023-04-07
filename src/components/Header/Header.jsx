import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/review">Review</Link>
            <Link to="/grandpa">Grandpa</Link>
            
        </div>
    );
};

export default Header;