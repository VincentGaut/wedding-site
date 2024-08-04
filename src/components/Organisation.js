import React, { useState,useEffect } from 'react';
import './../styles/Organisation.css';
import Organisation_data from './Organisation_data';

const Organisation = () => {
    const [password, setPassword] = useState('');
    const [navigator, setNavigator] = useState(0);
    const [auth, setAuth] = useState(false);
    
    
    const handleChange = (e) => {
        setPassword(e.target.value)
      };
      
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        if (password.trim()) {   // Vérifie que le commentaire n'est pas vide
          
            if (password == process.env.REACT_APP_PASS_ORGA)
            {
                //sessionStorage.setItem("orga",true);
                setAuth(true);
            }
        }
        
      };

      useEffect ( () => {
        //sessionStorage.removeItem("orga");
        setAuth(false)
      },[])
      useEffect ( () => {
        //sessionStorage.removeItem("orga");
        //console.log(navigator)
        
      },[navigator])

      if (!auth)
      {
        return (
            <section id="organisation">
              <div className='container-form'>
                <div className='orga-form-wrapper'>
                    <form className="organisation-form" onSubmit={handleFormSubmit}>
                    <label>Entrer le mot de passe:
                        <input
                        type="text" 
                        value={password}
                        onChange={handleChange}
                        />
                    </label>
                    <button className ="commentaire-button" type="submit">Entrer</button>
                    </form>
                </div>
            </div>
            </section>
            );
      }
      else
      {
        return (
            <section id="organisation">
                <nav className='orga-navbar'>
                    <ul className='array-orga'>
                        <li  onClick={() => setNavigator(0)} >Liste </li>
                        <li  onClick={() => setNavigator(1)}> Stats</li>

                    </ul>
                </nav>
                <Organisation_data navigator = {navigator}></Organisation_data>

            </section>
        );
      }
    
};
  
  export default Organisation;