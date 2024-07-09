import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Rebond from './Rebond';

import './../styles/CheckBoxDispo.css'

const CheckBoxDispo = ({Guest}) => {
  
  const [guest,setGuest] = useState(Guest);
  //console.log(guest)
  const [isCheckedWait, setIsCheckedWait] = useState(() =>initStateGuest(Guest,0));
  const [isCheckedOk, setIsCheckedOk] = useState(() =>initStateGuest(Guest,1));
  const [isCheckedNo, setIsCheckedNo] = useState(() => initStateGuest(Guest,2));
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [invitation, setInvitation] = useState(() => initInvitation(Guest));

  const [dispoBox, setdispoBox] = useState ("")
  
    const handleCheckboxChangeWait = (event) => {
      setIsCheckedWait(event.target.checked);
      if (!event.target.checked) {
        setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
      }
      else
      {
        checkBoxChecked(setIsCheckedOk,setIsCheckedNo);
      }
      setdispoBox("attente")
      sessionStorage.setItem('presence', "attente");
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
        setdispoBox("present")
        sessionStorage.setItem('presence', "present");
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
        setdispoBox("absent")
        sessionStorage.setItem('presence', "absent");
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
      switch (checkbox)
      {

      case  0:
        if ((guestInfo.presence == "") || (guestInfo.presence == "attente"))
        {
          
          sessionStorage.setItem('presence', "attente");
          return true;
        }
        else 
        {
          return false;
        }
          break
      case 1 :
          if (guestInfo.presence == "present")
          {
            sessionStorage.setItem('presence', "present");
            return true;
          }
          else{
            return false;
          }
        break;
      case 2:
          if (guestInfo.presence == "absent")
          {
            sessionStorage.setItem('presence', "absent");
            return true
          }
          else
          {
            return false;
          }
        break;
        
        }
      }


      function initInvitation (guestInfo)
    {
      
      if ((guestInfo.invitation == "") || (guestInfo.invitation == "repas"))
        {
          return true;
        }
        else 
        {
          return false;
        }

    }
    
        return (
            <div className='infoDispo-wrapper'>
              {/*<h2> Jour J : </h2>*/}
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
                        Present
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
                            Absent
                        </label>
                    </div>
                    

                </div>
                { invitation && <div className='menu-wrapper'>
                    <h3>Type de Menu : </h3>
                     <Menu Guest={guest}></Menu>
                </div>}

                {/* invitation &&<div className='rebond-wrapper'>
                 
                  <h2> Rebond : </h2>
                    <Rebond Guest={guest}></Rebond>
                  
                </div>*/}
            </div>
            
        
        );
  
    
  };
  
  export default CheckBoxDispo;