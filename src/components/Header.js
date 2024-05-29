import React from 'react';
import './../styles/Header.css';

const Header = () => (
  <header>
    <h1>Our Wedding</h1>
    <nav>
      <ul>
        <li><a href="#home">Bienvenue</a></li>
        <li><a href="#schedule">Blog de mariage</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#rsvp">Confirmer sa présence</a></li>
        <li><a href="#registry">Nous contacter</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
