import React, { useState,useEffect } from 'react';

import Checkbox from './CheckBox';

import './../styles/FirebaseHandler.css';


const FirebaseHandler  = ({Guest,setSubmitted})  => { 
    const [foundGuest,setFoundguest] = useState(Guest)
    const [submittedGuest,setsubmittedGuest] = useState(false)
    //console.log("foundguest" + Guest)

    useEffect ( () => {
        setFoundguest(Guest)
        //console.log(Guest)
      },[Guest])

      useEffect ( () => {
        setSubmitted(submittedGuest)
      },[submittedGuest])
    
    
    if (foundGuest!=undefined)
        {
            //console.log("foundguest" + foundGuest)
            return(
            <div className='result-firebase-success'>
                <Checkbox Guest = {foundGuest} setSubmitted={setsubmittedGuest}></Checkbox>
            </div>
              );
        }
      
  
    
    };

  export default FirebaseHandler;
