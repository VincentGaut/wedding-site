import React, { useState,useEffect } from 'react';
import firebase from './config';
import FirebaseHandler from './FirebaseHandler';

import './../styles/Firebase.css';
let collectionName = "guestList"//guest


const FirebaseResult = ({Search,Data,resetSearch}) => { 

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
  const [errorSearch, seterrorSearch] = useState(false);
  const [noUser, setnoUser] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedOver, setSubmittedOver] = useState(false);
  

  const ref = firebase.firestore().collection(collectionName);

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
      
        ref.get()
        .then((item) => {
          const items = item.docs.map((doc) => doc.data())
          //console.log(item.docs.map((doc) => doc.id));
          const itemsId = item.docs.map((doc) => doc.id);
          setGuest(items);
          setGuestId(itemsId)
          setloading(false);
        })
        .catch((error) => { console.log(error);
          seterrorSearch(true);
          console.log(errorSearch);
         })
      

      
      
  }

  function checkNames (){
    //setAuthorized(false)
    if (guest.length>0 && Data.prenom != undefined && Data.nom !=undefined)
      {
        for (let i=0;i<guest.length;i++)
          {
            if (Object.keys(guest[i]).length != 0)
              {
                if ((typeof(guest[i].prenom)== "string") && (typeof(guest[i].nom)
                  =="string"))
                  {
                    if ((Data.prenom).substr(-1)==" ")
                      {
                        Data.prenom = (Data.prenom.substring(0, (Data.prenom).length - 1));
                      }
                    if ((Data.nom).substr(-1)==" ")
                      {
                        Data.nom = (Data.nom.substring(0, (Data.nom).length - 1));
                      }
                    if ((((guest[i].prenom).localeCompare(Data.prenom, 'en', { sensitivity: 'base' }) )==0)&&
                    (((guest[i].nom).localeCompare(Data.nom, 'en', { sensitivity: 'base' }) )==0))
                    {
                      setFound(true)
                      setFoundguest(guest[i])
                      setFoundguestId(guestId[i])
                      sessionStorage.setItem('id', guestId[i]);
                      //console.log("guest log " ,guest[i])
                      
                    }
                    else
                    {
                      setnoUser(true)
                    }
                  }
              }
              else
                {
                  setnoUser(true)
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
    //setSubmittedOver(false)
  },[guest])

  useEffect ( () => {
    if (submitted)
      {
        
        setnoUser(false)
        setAuthorized(false)
        
        setSeacrh(false)
        setSubmitted(false)
        setloading(false)
        setSubmittedOver(true)

        resetSearch(false)
      }
    
  },[submitted])
  useEffect ( () => {
    if (found)
      {
        //console.log("found success " ,Foundguest)
        setAuthorized(true)
        sessionStorage.setItem('prenom', Foundguest.prenom);
        sessionStorage.setItem('nom', Foundguest.nom);
        setnoUser(false)
      }
      else{
        
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

    <FirebaseHandler Guest={Foundguest} setSubmitted= {setSubmitted}></FirebaseHandler>
  );
    }
    else if (errorSearch)
      {
        return (
        <div className='loading-message'>
          <h1 > Une erreur s'est produite veuillez nous contacter </h1>
        </div>
        );
      }
    else if (noUser)
      {
        return (
        <div className='loading-message'>
          <h1 > Invité introuvale </h1>
        </div>
        );
      }
      else if (submittedOver)
        {
          return (
          <div className='loading-message'>
            <h1 > Merci d'avoir enregistré votre réponse </h1>
          </div>
          );
        }
  
}

export default FirebaseResult;
