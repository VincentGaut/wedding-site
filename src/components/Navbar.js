// src/MyComponent.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-div'>
      <div className='navbar-wrapper'>
        <div className='initiales-wrapper'>
          <h2 className='initiales'> E+V</h2>
        </div>
        <div className='navbar-ligne2'>
          <nav className="navbar">
            <div className="navbar-logo"></div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
              <li><NavLink  to="/"  onClick={() => setIsOpen(false)}>Bienvenue</NavLink></li>
              <li><NavLink to="/Presence"  onClick={() => setIsOpen(false)}>Confirme ta presence</NavLink></li>
              <li><NavLink to="/contact"  onClick={() => setIsOpen(false)}>Contact</NavLink></li>
              <li><NavLink to="/gallery"  onClick={() => setIsOpen(false)}>Gallery</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
