import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Cart from '../pages/Cart';

const Navbar = ({ onSearch }) => {
  const totalItems = useSelector((state) => state.cart.items.length);


  return (
    <nav className="navbar">
      <div className="logo">Food-kart</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search items..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Link to="/cart" className="cart"><i class="fas fa-shopping-cart"><span>{totalItems}</span></i></Link>
    
    </nav>
  );
};

export default Navbar;
