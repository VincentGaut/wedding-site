import React, { useEffect, useState } from 'react';
import '../styles/Rebond.css'

const Rebond = ({Guest}) => {
  
    const [guest,setGuest] = useState(Guest);

    const [isCheckedWait, setIsCheckedWait] = useState(() =>initStateGuest(Guest,0));
    const [isCheckedOk, setIsCheckedOk] = useState(() =>initStateGuest(Guest,1));
    const [isCheckedNo, setIsCheckedNo] = useState(() => initStateGuest(Guest,2));
    const [isButtonClicked, setIsButtonClicked] = useState(false);
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
        sessionStorage.setItem('rebond', "attente");
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
          sessionStorage.setItem('rebond', "present");
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
          sessionStorage.setItem('rebond', "absent");
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
                if ((guestInfo.rebond == "") || (guestInfo.rebond == "attente"))
                {
                
                sessionStorage.setItem('rebond', "attente");
                return true;
                }
                else 
                {
                return false;
                }
                break
            case 1 :
                if (guestInfo.rebond == "present")
                {
                    sessionStorage.setItem('rebond', "present");
                    return true;
                }
                else{
                    return false;
                }
                break;
            case 2:
                if (guestInfo.rebond == "absent")
                {
                    sessionStorage.setItem('rebond', "absent");
                    return true
                }
                else
                {
                    return false;
                }
                break;
            }
        }


        return (

            <div className="rebond-container">
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

        );

  
};

export default Rebond;