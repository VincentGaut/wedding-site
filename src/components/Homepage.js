import React from 'react';

import MapComponent from './Lieux';
import './../styles/Homepage.css';
//import { Valse } from './image';

const Homepage = () => (
  <div className='homepage-wrapper'>
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
          <div className='wrapper-text'>
            <div className='fleur-wrapper1'>
              <div className='fleur'></div>
            </div>

            <p  className='text-bienvenue'> Nous nous marions ! </p>

            <p className='text-date'> 3 Mai 2025</p>

            <p className='text-lieu'> La gentilhommière à Artre, Nord </p>
          
            <div className='fleur-wrapper'>
              <div className='fleur'></div>
            </div>
          </div>
          <div className='rose-wrapper2'>
              <div className='rose'></div>
          </div>

      </div>

      <div className='map-wrapper'>
        <MapComponent></MapComponent>
      </div>
      

    </div>

    <div className='homepage-deco'>
                            
    </div>
  </div>
);

export default Homepage;