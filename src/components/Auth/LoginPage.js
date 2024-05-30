
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../config';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../config';

import './../../styles/LoginPage.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate()();

  const handleLogin = () => {
    // Remplacez ceci par votre logique de validation
    /*if (username === 'user' && password === 'password') {
      // Simulez la connexion
      localStorage.setItem('authenticated', 'true');
      history.push('/page1'); // Redirigez vers l'une des pages protégées après la connexion
    } else {
      alert('Invalid credentials');
    }*/
    /*firebase
    .auth()
    .signInWithEmailAndPassword("vincent1.gautier@gmail.com",
    "Lk0V%#I21vYo4AIR")
    .then ( ()=> {
      
    })
    .catch((err) => {
      console.log(err)
    })*/
    signInWithEmailAndPassword(auth, "vincent1.gautier@gmail.com", "Lk0V%#I21vYo4AIR")
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
  };

  return (
    <div className='LoginPage-wrapper'>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;