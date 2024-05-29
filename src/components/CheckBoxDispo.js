import React, { useEffect, useState } from 'react';
import Menu from './Menu';

import './../styles/CheckBoxDispo.css'

const CheckBoxDispo = ({Guest}) => {
  
  const [guest,setGuest] = useState(Guest);
  //console.log(guest)
  const [isCheckedWait, setIsCheckedWait] = useState(initStateGuest(Guest,0));
  const [isCheckedOk, setIsCheckedOk] = useState(initStateGuest(Guest,1));
  const [isCheckedNo, setIsCheckedNo] = useState(initStateGuest(Guest,2));
  const [isButtonClicked, setIsButtonClicked] = useState(false);

    
  
    const handleCheckboxChangeWait = (event) => {
      setIsCheckedWait(event.target.checked);
      if (!event.target.checked) {
        setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
      }
      else
      {
        checkBoxChecked(setIsCheckedOk,setIsCheckedNo);
      }
    };

    const handleCheckboxChangeOk = (event) => {
        setIsCheckedOk(event.target.checked);
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
        {
          checkBoxChecked(setIsCheckedWait,setIsCheckedNo);
        }
      };

      const handleCheckboxChangeNo = (event) => {
        setIsCheckedNo(event.target.checked);
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
      {
        checkBoxChecked(setIsCheckedWait,setIsCheckedOk);
      }
      };
  
    const handleButtonClick = () => {
      setIsButtonClicked(true);
    };

    function checkBoxChecked(set1,set2)
    {
      set1(false)
      set2(false)
    }

    function initStateGuest (guestInfo,checkbox)
    {
      if (checkbox == 1 )
        {
          if (guestInfo.presence == "present")
            {
              return true;
            }
            else{
              return false;
            }
        }
      else if (checkbox == 2)
        {
          if (guestInfo.presence == "absent")
            {
              return true
            }
            else
            {
              return false;
            }
        }
      else
      {
        if ((guestInfo.presence == " ") || (guestInfo.presence == "attente"))
          {
            return true;
          }
          else 
          {
            return false;
          }
      }
    }
        return (
            <div>

            
                <div className="box-dispo">
                    <div className="round-checkbox-containerWait">
                        <label className="round-checkbox-label">
                            <input
                            type="checkbox"
                            checked={isCheckedWait}
                            onChange={handleCheckboxChangeWait}
                            className="round-checkbox-input"
                            />
                            <span className="round-checkbox-custom"></span>
                            En attente
                        </label>
                    </div>

                    <div className="round-checkbox-containerOk">
                        <label className="round-checkbox-label">
                            <input
                            type="checkbox"
                            checked={isCheckedOk}
                            onChange={handleCheckboxChangeOk}
                            className="round-checkbox-input"
                            />
                            <span className="round-checkbox-custom"></span>
                        J'accepte
                        </label>
                    </div>

                    <div className="round-checkbox-containerNo">
                        <label className="round-checkbox-label">
                            <input
                            type="checkbox"
                            checked={isCheckedNo}
                            onChange={handleCheckboxChangeNo}
                            className="round-checkbox-input"
                            />
                            <span className="round-checkbox-custom"></span>
                            Je n'accepte pas
                        </label>
                    </div>
                    

                </div>
                <div className='menu-wrapper'>
                    <h3>Choisir Menu : </h3>
                    <Menu Guest={guest}></Menu>
                </div>
            </div>
            
        
        );
  
    
  };
  
  export default CheckBoxDispo;