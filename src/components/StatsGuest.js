import React, { useState,useEffect,useRef } from 'react';
import './../styles/Organisation_data.css';


// Enregistre les composants ChartJS que tu utilises

const StatsGuest = ({data}) => {
    const [fields, setFields] = useState(data);

    const [tableData,setTbaleData] = useState({
        "name":"nombre d'invité",
        "value" : data.length
    })

    const [present, setPresent] = useState({});
    const [absent, setAbsent] = useState({});
    const [response, setResponse] = useState({});
    const [allergie, setAllergie] = useState({});
    const [vege, setVege] = useState({});
    const [menu, setmenu] = useState({});
    const [fairePart, setFairePart] = useState({});
    const [invitVin, setInvitVin] = useState({});
    const [invitrepas, setInvitrepas] = useState({});

    const [amis, setAmis] = useState({});
    const [famille, setFamille] = useState({});
    const [amisEmeline, setAmisEmeline] = useState({});
    const [amisVincent, setAmisVincent] = useState({});
    const [familleEmeline, setFamilleEmeline] = useState({});
    const [familleVincent, setFamilleVincent] = useState({});

  
    // Assure-toi que les échelles sont correctement configurées si elles sont utilisées
    // scales: {
    //   x: { beginAtZero: true },
    //   y: { beginAtZero: true },
    // },
  

  
  useEffect ( () => {
    //console.log(documents.length)
    
    let totPres =0;
    let totAbs =0;
    let totResp =0;
    let totAlergie = 0;
    let totVege = 0;
    let totMenu = 0 ;
    let totFairePart = 0;
    let totvin = 0;
    let totrepas = 0;

    let totAmis = 0;
    let totFamille = 0;
    let totAmisEmeline = 0
    let totAmisVincent = 0;
    let totFamilleEmeline = 0;
    let totFamilleVincent = 0;


    for (let i=0;i<fields.length;i++)
    {
      if (fields[i].presence === "present")
      {
        totPres = totPres+1;
      }else if (fields[i].presence === "absent")
      {
        totAbs = totAbs+1;
      }

      if (fields[i].regime === "allergie")
      {
        totAlergie = totAlergie + 1;
      }
      if (fields[i].menu === "Adulte")
      {
        totMenu = totMenu + 1;
      }
      if (fields[i].regime === "vegetarien")
      {
        totVege = totVege + 1;
      }
      
      if (fields[i].fairePart === "ok")
      {
        totFairePart = totFairePart + 1;
      }

      if (fields[i].lien === "amis emeline")
      {
        totAmisEmeline = totAmisEmeline + 1;
      }

      if (fields[i].lien === "amis vincent")
      {
        totAmisVincent = totAmisVincent + 1;
      }

      if (fields[i].lien === "famille emeline")
      {
        totFamilleEmeline = totFamilleEmeline + 1;
      }
      if (fields[i].lien === "famille vincent")
      {
        totFamilleVincent = totFamilleVincent + 1;
      }
      if (fields[i].invitation === "vin")
      {
        totvin = totvin + 1;
      }
      if (fields[i].invitation === "repas")
      {
        totrepas = totrepas + 1;
      }

      totFamille = totFamilleEmeline + totFamilleVincent;
      totAmis = totAmisEmeline + totAmisVincent;
      totResp = totPres + totAbs;

      
    }
    setPresent({
      "name" : "nb present",
      "value" : totPres})
    setAbsent({
      "name" : "nb absent",
      "value" : totAbs})
    setResponse({
      "name" : "nb de réponse",
      "value" : totResp})

    setAllergie({
      "name" : "nb allergie",
      "value" : totAlergie
    })

    setmenu({
      "name" : "Menu adulte",
      "value" : totMenu
    })

    setVege({
      "name" : "Menu vege",
      "value" : totVege
    })

    setFairePart({
      "name" : "Faire part donnés",
      "value" : totFairePart
    })

    setAmis({
      "name" : "Amis",
      "value" : totAmis
    })

    setFamille({
      "name" : "Amis",
      "value" : totFamille
    })

    setFamilleEmeline({
      "name" : "Amis",
      "value" : totFamilleEmeline
    })

    setFamilleVincent({
      "name" : "Amis",
      "value" : totFamilleVincent
    })

    setAmisEmeline({
      "name" : "Amis emeline",
      "value" : totAmisEmeline
    })

    setAmisVincent({
      "name" : "Amis Vincent",
      "value" : totAmisVincent
    })

    setInvitVin({
      "name" : "Nombre d'invitaion vin d'honneur",
      "value" : totvin
    })

    setInvitrepas({
      "name" : "Nombre d'invitaion repas",
      "value" : totrepas
    })
    
    
  },[fields])

  if (fields === null) {
    return <div>Chargement...</div>;
  }
  
    return (
      <div>
        
        <table className='stat-table'>
          <thead>
            
          </thead>
          <tbody>
            <tr>
              <th >{tableData.name}</th>
              <th key={tableData.name}>{tableData.value}</th>
            </tr>

            <tr>
              <th >present</th>
              <th key = {present.name}>{present.value}</th>
            </tr>
            <tr>
              <th >absent</th>
              <th key = {absent.name}>{absent.value}</th>
            </tr>
            <tr>
              <th >nbr réponse</th>
              <th key = {response.name}>{response.value}</th>
            </tr>

            <tr>
              <th >Allergie</th>
              <th key = {allergie.name}>{allergie.value}</th>
            </tr>

            <tr>
              <th >Menu adulte</th>
              <th key = {menu.name}>{menu.value}</th>
            </tr>

            <tr>
              <th >Menu Vegetarien</th>
              <th key = {vege.name}>{vege.value}</th>
            </tr>

            <tr>
              <th >Faire part donnés</th>
              <th key = {fairePart.name}>{fairePart.value}</th>
            </tr>

            <tr>
              <th >Amis</th>
              <th key = {amis.name}>{amis.value}</th>
            </tr>

            <tr>
              <th >famille</th>
              <th key = {famille.name}>{famille.value}</th>
            </tr>

            <tr>
              <th >famille emeline</th>
              <th key = {familleEmeline.name}>{familleEmeline.value}</th>
            </tr>
            <tr>
              <th >famille vincent</th>
              <th key = {familleVincent.name}>{familleVincent.value}</th>
            </tr>

            <tr>
              <th >amis vincent</th>
              <th key = {amisVincent.name}>{amisVincent.value}</th>
            </tr>
            <tr>
              <th >amis emeline</th>
              <th key = {amisEmeline.name}>{amisEmeline.value}</th>
            </tr>
            <tr>
              <th >vin d'honneur</th>
              <th key = {invitVin.name}>{invitVin.value}</th>
            </tr>
            <tr>
              <th >Repas</th>
              <th key = {invitrepas.name}>{invitrepas.value}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StatsGuest;
