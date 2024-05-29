import React, { useState,useEffect } from 'react';

import Checkbox from './CheckBox';

import './../styles/FirebaseHandler.css';


function FirebaseHandler ({Guest})  { 
    const [foundGuest,setFoundguest] = useState(Guest)
    //console.log("foundguest" + Guest)

    useEffect ( () => {
        setFoundguest(Guest)
        //console.log(Guest)
      },[Guest])
    
    
    if (foundGuest!=undefined)
        {
            //console.log("foundguest" + foundGuest)
            return(
            <div>
                <Checkbox Guest = {foundGuest}></Checkbox>
            </div>
              );
        }
      
  
    
    };

  export default FirebaseHandler;
