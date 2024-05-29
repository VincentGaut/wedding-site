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
      <h2 className='initiales'> E+V</h2>
      <nav className="navbar">
        <h1 className="navbar-logo">Our Wedding</h1>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><NavLink exact to="/" activeClassName="active-link" onClick={() => setIsOpen(false)}>Bienvenue</NavLink></li>
          <li><NavLink to="/Blog" activeClassName="active-link" onClick={() => setIsOpen(false)}>Blog de mariage</NavLink></li>
          <li><NavLink to="/Presence" activeClassName="active-link" onClick={() => setIsOpen(false)}>Confirme ta presence</NavLink></li>
          <li><NavLink to="/events" activeClassName="active-link" onClick={() => setIsOpen(false)}>Events</NavLink></li>
          <li><NavLink to="/rsvp" activeClassName="active-link" onClick={() => setIsOpen(false)}>RSVP</NavLink></li>
          <li><NavLink to="/gallery" activeClassName="active-link" onClick={() => setIsOpen(false)}>Gallery</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
