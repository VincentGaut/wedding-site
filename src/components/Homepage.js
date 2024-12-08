import React from 'react';

import MapComponent from './Lieux';
import './../styles/Homepage.css';
//import { Valse } from './image';
import WeddingCountdown from './coutdown';
import Programme from './Programme';

const Homepage = () => (
  <div className='homepage-wrapper'>
    <div className="header_pres">
      <div className='presentation'>
          <h1 className='header_title'>
          Emeline & Vincent    
          </h1>
      </div>
      <div className='homepage'>
          
          <div className='wrapper-text'>
            <div className='text-container'>
              <p  className='text-bienvenue'> Nous nous marions ! </p>

              <p className='text-date'> le 3 Mai 2025</p>
            </div>

            
          </div>
          <div className='save-the-date'>
              <h2> Save The Date !</h2>
          </div>

          <div className='countdown-div'>
            <WeddingCountdown></WeddingCountdown>
          </div>

          <div className='progamme-container'>
            <Programme></Programme>
          </div>

            <div className='lieux-wrapper'>
              <div className='lieux-text-container'>
                <h3> Le Lieu</h3>
                <p className='text-lieu'> La gentilhommière à Artres, Nord </p>
                <p className='adresse'> 2 Rue de l'Église, 59269 Artres</p>
              </div>
            </div>
          

      </div>
      

    </div>

    <div className='homepage-deco'>
                            
    </div>
  </div>
);

export default Homepage;