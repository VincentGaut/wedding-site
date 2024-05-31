
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../config';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../config';

import './../../styles/LoginPage.css'

const LoginPage = () => {
  console.log("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Remplacez ceci par votre logique de validation
    signInWithEmailAndPassword(auth, process.env.REACT_APP_FIREBASE_ID,
                              process.env.REACT_APP_FIREBASE_PASS)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            sessionStorage.setItem('authenticated', true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
        navigate('/Bienvenue');
  };

  return (
    <div className='LoginPage-wrapper'>
      <div className='Login-text-wrapper'>
        <div className = "firstPage-save-the-date">
          <h1> SAVE THE DATE </h1>
        </div>

        <div className = "firstPage-name">
          <h2> Emeline & Vincent </h2>
        </div>

        <div className='button-wrapper'>
          <button className= "button-enter-page" onClick={handleLogin}>Entrer</button>
        </div>

        <div className = "firstPage-date">
          <h2> 03 Mai 2025 </h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;