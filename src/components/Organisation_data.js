import React, { useState,useEffect } from 'react';
import './../styles/Organisation_data.css';

import firebase from './config';
import { collectionName } from './config';

import GuestListe from './GuestListe';
import StatsGuest from './StatsGuest';


const Organisation_data = ({navigator}) => {
   const [Navigator, setNavigator] = useState(navigator);
   const ref = firebase.firestore().collection(collectionName);
    const [data, setData] = useState([]);
    const [documents, setDocuments] = useState([]);
  const [fields, setFields] = useState([]);
  const [liste, setListe] = useState(true);
  const [stats, setStats] = useState(false);
  const [guestNB, setGuestNB] = useState(0);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
              //const collectionRef = firestore.collection('your-collection-name');
              const snapshot = await ref.get();
              
              if (!snapshot.empty) {
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDocuments(docs);
      
                // Extract unique fields
                const allFields = docs.flatMap(doc => Object.keys(doc));
                setFields([...new Set(allFields)]);
              }
            } catch (error) {
              console.error('Error fetching documents: ', error);
            }
          };
      
          fetchDocuments();
      }, []);


    useEffect ( () => {
        //sessionStorage.removeItem("orga");
        setNavigator(navigator);
        
        switch (navigator)
        {
            case 0:
                setListe(true)
                setStats(false)
            break;
            case 1:
                setListe(false)
                setStats(true)
            break;
            default:
                setListe(true)
                setStats(false)
            break;
        }
        
      },[navigator])

      useEffect ( () => {
        //console.log(documents.length)
        setGuestNB(documents.length)
        
      },[documents])

    return (
        <div>
            {liste && <GuestListe data={fields}
                                    doc = {documents}></GuestListe>}
            {stats && <StatsGuest
                                    ></StatsGuest>}
        </div>
    );
       

};

export default Organisation_data;