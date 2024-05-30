import React, { useState,useEffect } from 'react';
import firebase from './config';
import FirebaseHandler from './FirebaseHandler';

import './../styles/Firebase.css';



const FirebaseResult = ({Search,Data}) => { 

  const [search,setSeacrh] = useState(Search);
  const [formData, setFormData] = useState(Data);

  //console.log(formData)
  const[guest,setGuest] = useState([]);
  const[guestId,setGuestId] = useState([]);
  const [loading,setloading] = useState(false);
  const [authorized,setAuthorized] = useState(false);
  const [found,setFound] = useState(false);
  const[Foundguest,setFoundguest] = useState({});
  const[FoundguestId,setFoundguestId] = useState({});

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
        const items = item.docs.map((doc) => doc.data())
        //console.log(item.docs.map((doc) => doc.id));
        const itemsId = item.docs.map((doc) => doc.id);
        setGuest(items);
        setGuestId(itemsId)
        setloading(false);
      });
      
  }

  function checkNames (){
    //setAuthorized(false)
    if (guest.length>0 && Data.prenom != undefined && Data.nom !=undefined)
      {
        for (let i=0;i<guest.length;i++)
          {
            if (Object.keys(guest[i]).length != 0)
              {
                if ((((guest[i].prenom).localeCompare(Data.prenom, 'en', { sensitivity: 'base' }) )==0)&&
                (((guest[i].nom).localeCompare(Data.nom, 'en', { sensitivity: 'base' }) )==0))
              {
                setFound(true)
                setFoundguest(guest[i])
                setFoundguestId(guestId[i])
                sessionStorage.setItem('id', guestId[i]);
                //console.log("guest log " ,guest[i])
                
              }
              }
          }
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
    
  },[search,formData]);

  useEffect ( () => {
    checkNames();
  },[guest])

  useEffect ( () => {
    if (found)
      {
        //console.log("found success " ,Foundguest)
        setAuthorized(true)
        sessionStorage.setItem('prenom', Foundguest.prenom);
        sessionStorage.setItem('nom', Foundguest.nom);
      }
  },[Foundguest])

  if (loading)
    {
      return (
        <div className='loading-message'>
          <h1 > Loading ... </h1>
        </div>
      );
    }
  else if (authorized)
    {
      //console.log("found success " ,Foundguest)
      return (

    <FirebaseHandler Guest={Foundguest}></FirebaseHandler>
  );
    }
  
}

export default FirebaseResult;
