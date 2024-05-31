import React, { useEffect, useState } from 'react';
import Commentaires from './Commentaires';
import './../styles/Regime.css';

const Regime = ({Guest,setSubmitted}) => {
    const [guest,setGuest] = useState(Guest);

    const [isCheckedAucun, setIsCheckedAucun] = useState(() =>initStateGuest(Guest,0));
    const [isCheckedVegetarien, setIsCheckedVegetarien] = useState(() =>initStateGuest(Guest,1));
    const [isCheckedVegetalien, setIsCheckedVegetalien] = useState(() =>initStateGuest(Guest,2));
    const [isCheckedAllergie, setIsCheckedAllergie] = useState(() =>initStateGuest(Guest,3));
    const [isCheckedAutre, setIsCheckedAutre] = useState(() =>initStateGuest(Guest,4));
    const [submittedGuest,setsubmittedGuest] = useState(false)

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect ( () => {
      setSubmitted(submittedGuest)
    },[submittedGuest])

    const handleCheckboxAucun = (event) => {
        setIsCheckedAucun(event.target.checked);
        sessionStorage.setItem('regime', "aucun");
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
        {
          checkBoxChecked(setIsCheckedVegetarien,setIsCheckedVegetalien,
            setIsCheckedAllergie,setIsCheckedAutre
          );
        }
      };

      const handleCheckboxVegetarien = (event) => {
        setIsCheckedVegetarien(event.target.checked);
        sessionStorage.setItem('regime', "vegetarien");
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
        {
          checkBoxChecked(setIsCheckedAucun,setIsCheckedVegetalien,
            setIsCheckedAllergie,setIsCheckedAutre
          );
        }
      };

      const handleCheckboxVegetalien = (event) => {
        setIsCheckedVegetalien(event.target.checked);
        sessionStorage.setItem('regime', "vegetalien");
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
        {
          checkBoxChecked(setIsCheckedAucun,setIsCheckedVegetarien,
            setIsCheckedAllergie,setIsCheckedAutre
          );
        }
      };

      const handleCheckboxAllergie = (event) => {
        setIsCheckedAllergie(event.target.checked);
        sessionStorage.setItem('regime', "allergie");
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
        {
          checkBoxChecked(setIsCheckedAucun,setIsCheckedVegetarien,
            setIsCheckedVegetalien,setIsCheckedAutre
          );
        }
      };

      const handleCheckboxAutre = (event) => {
        setIsCheckedAutre(event.target.checked);
        sessionStorage.setItem('regime', "autre");
        if (!event.target.checked) {
          setIsButtonClicked(false); // Réinitialiser l'état du bouton si la case est décochée
        }
        else
        {
          checkBoxChecked(setIsCheckedAucun,setIsCheckedVegetarien,
            setIsCheckedVegetalien,setIsCheckedAllergie
          );
        }
      };

      function checkBoxChecked(set1,set2,set3,set4)
    {
      set1(false)
      set2(false)
      set3(false)
      set4(false)
    }

    function initStateGuest (guestInfo,checkbox)
    {
        switch (checkbox){
        case 0:
            if (guestInfo.regime == "aucun" || guestInfo.regime == "")
            {
              sessionStorage.setItem('regime', "aucun");
                return true;
            }
            else
            {
                return false;
            }

        break;

        case 1:
            if (guestInfo.regime == "vegetarien")
            {
              sessionStorage.setItem('regime', "vegetarien");
                return true;
            }
            else
            {
                return false;
            }
        break;
        case 2:
            if (guestInfo.regime == "vegetalien")
            {
              sessionStorage.setItem('regime', "vegetalien");
                return true;
            }
            else
            {
                return false;
            }
        break;
        case 3:
            if (guestInfo.regime == "allergie")
            {
              sessionStorage.setItem('regime', "allergie");
                return true;
            }
            else
            {
                return false;
            }
        break;
        case 4:
            if (guestInfo.regime == "autre")
            {
              sessionStorage.setItem('regime', "autre");
                return true;
            }
            else
            {
                return false;
            }
        break;
        }
    }

    return (
<div>
    <h2>Regime alimentaire</h2>
    <div className="regime-alimentaire">
    <div className='regime-aucun'>
            <div className="round-checkbox-container">
                <label className="round-checkbox-label">
                    <input
                    type="checkbox"
                    checked={isCheckedAucun}
                    onChange={handleCheckboxAucun}
                    className="round-checkbox-input"
                    />
                    <span className="round-checkbox-custom"></span>
                    Aucun
                </label>
            </div>
        </div>

        <div className='regime-végétarien'>
            <div className="round-checkbox-container">
                <label className="round-checkbox-label">
                    <input
                    type="checkbox"
                    checked={isCheckedVegetarien}
                    onChange={handleCheckboxVegetarien}
                    className="round-checkbox-input"
                    />
                    <span className="round-checkbox-custom"></span>
                    Végétarien
                </label>
            </div>
        </div>

        <div className='regime-végétalien'>
        <div className="round-checkbox-container">
                <label className="round-checkbox-label">
                    <input
                    type="checkbox"
                    checked={isCheckedVegetalien}
                    onChange={handleCheckboxVegetalien}
                    className="round-checkbox-input"
                    />
                    <span className="round-checkbox-custom"></span>
                    Végétalien
                </label>
            </div>
        </div>

        <div className='regime-alergie'>
        <div className="round-checkbox-container">
                <label className="round-checkbox-label">
                    <input
                    type="checkbox"
                    checked={isCheckedAllergie}
                    onChange={handleCheckboxAllergie}
                    className="round-checkbox-input"
                    />
                    <span className="round-checkbox-custom"></span>
                    Alergies
                </label>
            </div>
        </div>
        <div className='regime-autre'>
        <div className="round-checkbox-container">
                <label className="round-checkbox-label">
                    <input
                    type="checkbox"
                    checked={isCheckedAutre}
                    onChange={handleCheckboxAutre}
                    className="round-checkbox-input"
                    />
                    <span className="round-checkbox-custom"></span>
                    Autre
                </label>
            </div>
        </div>
      
    </div>
    <Commentaires Guest={guest} setSubmitted={setsubmittedGuest}></Commentaires>
</div>
);
  
};

export default Regime;