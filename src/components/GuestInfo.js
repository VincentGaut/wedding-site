import React, { useEffect, useState } from 'react';

import './../styles/GuestInfo.css'

import CheckBoxDispo from './CheckBoxDispo';
import Regime from './Regime';

const GuestInfo = ({Guest}) => {
    //console.log(Guest)
    const [guest,setGuest] = useState(Guest);
    const [dispoBox, setdispoBox] = useState ("")
    useEffect ( () => {
        setGuest(Guest)
        //console.log(Guest)
      },[Guest])
  
    return (

    <div>   
        <div className="rectangle-guest-info">
            <div className='name-box'>
                <p>Nom: <b>{guest.nom}</b></p>
                <p>Prénom: <b>{guest.prenom}</b></p>
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