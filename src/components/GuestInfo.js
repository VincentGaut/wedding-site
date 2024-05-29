import React, { useEffect, useState } from 'react';

import './../styles/GuestInfo.css'

import CheckBoxDispo from './CheckBoxDispo';
import Regime from './Regime';

const GuestInfo = ({Guest}) => {
    //console.log(Guest)
    const [guest,setGuest] = useState(Guest);
  
  
    return (

    <div>   
        <div className="rectangle">
            <div className='name-box'>
                <p>Nom: {guest.nom}</p>
                <p>Prénom: {guest.prenom}</p>
            </div>

            <div className='dispo-box'>
                <CheckBoxDispo Guest={guest}></CheckBoxDispo>
            </div>
        </div>

        <div className='regime-alim'>
            <Regime Guest={guest}></Regime>
        </div>
        
    </div> 
    );
  };
  
  export default GuestInfo;