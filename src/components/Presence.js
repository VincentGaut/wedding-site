import React, { useEffect, useState } from 'react';
import './../styles/Presence.css';
import FirebaseResult from './Firebase.js';


const Presence = () => {
    const [isPresent, setIsPresent] = useState(false);
    const [search,setSeacrh] = useState(false);
    const [formData, setFormData] = useState({
        prenom: '',
        nom: ''
      });
    const [submittedData, setSubmittedData] = useState(formData);
      const [submit, setSubmit] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    //console.log('Form submitted:', formData);
    setSubmittedData(formData);
    setSeacrh(true);
    //clearSubmit()
    };



    function clearSubmit ()
    {
      setFormData({
        prenom: '',
        nom: ''
      });
      
    }
  
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div className='information-form'>
            <div className='prenom-form'>
            <label htmlFor="prenom">Prenom :</label>
            <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
            />
            </div>
            <div className='nom-form'>
            <label htmlFor="name">Nom :</label>
            <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
            />
            </div>
        </div>
        <div className='button-form-wrapper'>
            <button className='button-form' type="submit">Rechercher</button>
        </div>
      </form>

      <FirebaseResult Search = {search}
                      Data = {submittedData}
                      ></FirebaseResult>
      </div>
    );
  };

export default Presence;