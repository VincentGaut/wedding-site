import React, { useEffect, useState } from 'react';
import './../styles/CheckBox.css'; // Importez le fichier CSS pour les styles

import GuestInfo from './GuestInfo';

const Checkbox = ({Guest}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [guest,setGuest] = useState(Guest);
  const [name,setName] = useState(Guest.prenom+" "+Guest.nom);
  

  useEffect ( () => {
    setGuest(Guest)
    setName(Guest.prenom+" "+Guest.nom)
  },[Guest])

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (!event.target.checked) {
      setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  if (!isButtonClicked)
    {
        return (
            <div>
                <div className="round-checkbox-container">
                <label className="round-checkbox-label">
                    <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="round-checkbox-input"
                    />
                    <span className="round-checkbox-custom"></span>
                    {name}
                </label>
                {isChecked && <button className="round-checkbox-button"
                onClick={handleButtonClick}>Continuer</button>}
                </div>
            </div>
            
          );
    }

    else
    {
        return (
            <div>
                    {isButtonClicked && <GuestInfo Guest={guest}></GuestInfo>}
                </div>
        );
        
    }

  
};

export default Checkbox;