// src/MyComponent.js
import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';



import './../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='navbar-div'>
      <div className='navbar-wrapper'>
        <div className='navbar-ligne1'>
          <div className='initiales-wrapper'>
          <span onClick={handleClick} >
            <h2 className='initiales'> E+V</h2>
          </span>
          <div className='logo'></div>
        </div>
          
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
              <li><NavLink  to="/Bienvenue"  onClick={() => setIsOpen(false)}>Bienvenue</NavLink></li>
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
