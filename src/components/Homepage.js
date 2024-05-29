import React from 'react';
import Footer from './Footer';
import './../styles/Homepage.css';
//import { Valse } from './image';

const Homepage = () => (
  <div>
  <div className="header_pres">
    <div className='presentation'>
        <h1 className='header_title'>
        Emeline Fiore & Vincent Gautier    
        </h1>
    </div>
    <div className='homepage'>
        <div className='rose-wrapper'>
            <div className='rose'></div>
        </div>
        <p  className='text-bienvenue'> Nous nous marions ! </p>

        <p className='text-date'> 3 Mai 2025</p>

        <p className='text-lieu'> La gentilhommière à Artre, Nord </p>

        <div className='fleur-wrapper'>
            <div className='fleur'></div>
        </div>

    </div>
    

  </div>
  <Footer></Footer>
  </div>
);

export default Homepage;