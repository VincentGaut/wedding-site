import firebase from "../config";
import React, { useEffect, useState } from 'react';

const AuthProvider = () => {
    const [currentUser, setCurrentUser] = useState (null)
    const [loading, setLoading] = useState (null)

    useEffect ( () => {
        firebase.auth().onAuthStateChanged ( (user) => {
            setCurrentUser(user)
            setLoading (false)
        })
    }, [])

    console.log(currentUser)
};

export default AuthProvider;