import React from 'react'
import logo from '../assests/hunger_hub_logo.jpg'; 
import './Header.css';

function Header() {
  return (
    <div>
    <div className="header">
        <div className="logo">
        <img className="logo-img" src={logo} alt="Hunger Hub Logo"></img>
        </div>
        <div className="nav-items">
          <ul className="nav-list">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      
    </div>
    </div>
  )
}

export default Header
