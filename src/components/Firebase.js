import React, { useState,useEffect } from 'react';
import firebase from './config';
import FirebaseHandler from './FirebaseHandler';

import './../styles/RSVP.css';



const FirebaseResult = ({Search,Data}) => { 

  const [search,setSeacrh] = useState(Search);
  const [formData, setFormData] = useState(Data);

  //console.log(formData)
  const[guest,setGuest] = useState([]);
  const [loading,setloading] = useState(false);
  const [authorized,setAuthorized] = useState(false);
  const [found,setFound] = useState(false);
  const[Foundguest,setFoundguest] = useState({});

  const ref = firebase.firestore().collection("guest");

  //console.log(ref)

  function getGuest() {
    setloading(true);
    /*ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setGuest(items);
      setloading(false)*/
      ref.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setGuest(items);
        setloading(false);
      });
      
  }

  function checkNames (){
    //setAuthorized(false)
    if (guest.length>0)
      {
        for (let i=0;i<guest.length;i++)
          {
            if ((((guest[i].prenom).localeCompare(Data.prenom, 'en', { sensitivity: 'base' }) )==0)&&
            (((guest[i].nom).localeCompare(Data.nom, 'en', { sensitivity: 'base' }) )==0))
              {
                setFound(true)
                setFoundguest(guest[i])
                //console.log("guest log " ,guest[i])
                
              }
          }
          setSeacrh(false)
      }
    
  }
  useEffect ( () => {
    setSeacrh(Search)
  },[Search])
  useEffect ( () => {
    setFormData(Data)
  },[Data])

  useEffect ( () => {
    if (search)
      {
        getGuest();
        
      }
      console.log(search)
      console.log(formData)
    
  },[search,formData]);

  useEffect ( () => {
    checkNames();
  },[guest])

  useEffect ( () => {
    if (found)
      {
        //console.log("found success " ,Foundguest)
        setAuthorized(true)
      }
  },[Foundguest])

  if (loading)
    {
      return (
        <h1 > Loading ... </h1>
      );
    }
  else if (authorized)
    {
      console.log("found success " ,Foundguest)
      return (
    <FirebaseHandler Foundguest={Foundguest}></FirebaseHandler>
  );
    }
  
}

export default FirebaseResult;
