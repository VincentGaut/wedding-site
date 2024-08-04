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
          
        
        <div className='navbar-ligne2'>
          <nav className="navbar">
            <div className='empty element'></div>
            <div className="navbar-logo" onClick={handleClick} style={{ cursor: 'pointer' }}></div>
            <div className="navbar-toggle" onClick={toggleNavbar}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
              <li><NavLink  to="/Bienvenue"  onClick={() => setIsOpen(false)}>Bienvenue</NavLink></li>
              <li><NavLink to="/Presence"  onClick={() => setIsOpen(false)}>Confirme ta presence</NavLink></li>
              <li><NavLink to="/infos"  onClick={() => setIsOpen(false)}>Informations</NavLink></li>
              <li><NavLink to="/galerie"  onClick={() => setIsOpen(false)}>Galerie</NavLink></li>
              <li><NavLink to="/organisation"  onClick={() => setIsOpen(false)}>Organisation</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
