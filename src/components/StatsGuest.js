import React, { useState,useEffect,useRef } from 'react';
import './../styles/StatsGuest.css';


// Enregistre les composants ChartJS que tu utilises

const StatsGuest = ({data}) => {
    const [fields, setFields] = useState(data);

    const [tableData,setTbaleData] = useState({
        "name":"nombre d'invité",
        "value" : data.length
    })

    const [present, setPresent] = useState({});
    const [absent, setAbsent] = useState({});
    const [attente, setAttente] = useState({});
    const [response, setResponse] = useState({});
    const [allergie, setAllergie] = useState({});
    const [vege, setVege] = useState({});
    const [menu, setmenu] = useState({});
    const [menuEnfant, setmenuEnfant] = useState({});
    const [fairePart, setFairePart] = useState({});
    const [invitVin, setInvitVin] = useState({});
    const [invitrepas, setInvitrepas] = useState({});
    const [presRepas, setpresRepas] = useState({});
    const [presvin, setpresvin] = useState({});
    const [absrepas, setabsrepas] = useState({});
    const [absvin, setabsvin] = useState({});

    const [amis, setAmis] = useState({});
    const [famille, setFamille] = useState({});
    const [amisEmeline, setAmisEmeline] = useState({});
    const [amisVincent, setAmisVincent] = useState({});
    const [familleEmeline, setFamilleEmeline] = useState({});
    const [familleVincent, setFamilleVincent] = useState({});

    const [amisEmelinePres, setAmisEmelinePres] = useState({});
    const [amisVincentPres, setAmisVincentPres] = useState({});
    const [familleEmelinePres, setFamilleEmelinePres] = useState({});
    const [familleVincentPres, setFamilleVincentPres] = useState({});


    const [relance, setRelance] = useState({
      name: "personne à relancer",
      value: [] // Initialisation avec un tableau vide
    });

    const [attenteTab, setAttenteTab] = useState({
      name: "personne en attente",
      value: [] // Initialisation avec un tableau vide
    });

  
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

    let totAmisEmelinePres = 0
    let totAmisVincentPres = 0;
    let totFamilleEmelinePres = 0;
    let totFamilleVincentPres = 0;

    let totpresRepas = 0;
    let totabsRepas = 0;
    let totabsVin = 0;
    let totAttente = 0;
    let totMenuEnfant = 0;

    let relancedata = [];
    let enAttenteTabData = [];


    for (let i=0;i<fields.length;i++)
    {
      if (fields[i].presence === "present")
      {
        totPres = totPres+1;
      }else if (fields[i].presence === "absent")
      {
        totAbs = totAbs+1;
      }
      else if (fields[i].presence === "attente")
      {
        totAttente = totAttente+1;
        enAttenteTabData.push(({"prenom" : fields[i].prenom,
          "nom" : fields[i].nom
        }))
      }

      if (fields[i].regime === "allergie")
      {
        totAlergie = totAlergie + 1;
      }
      if ((fields[i].menu === "Adulte") && (fields[i].presence === "present"))
      {
        totMenu = totMenu + 1;
      }
      else if ((fields[i].menu === "Enfant") && (fields[i].presence === "present"))
      {
        totMenuEnfant = totMenuEnfant + 1;
      }
      if ((fields[i].regime === "vegetarien") && (fields[i].presence === "present") )
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

      if ((fields[i].lien === "amis emeline") && (fields[i].presence === "present"))
      {
        totAmisEmelinePres = totAmisEmelinePres + 1;
      }

      if ((fields[i].lien === "amis vincent") && (fields[i].presence === "present"))
      {
        totAmisVincentPres = totAmisVincentPres + 1;
      }

      if ((fields[i].lien === "famille emeline") && (fields[i].presence === "present"))
      {
        totFamilleEmelinePres = totFamilleEmelinePres + 1;
      }
      if ((fields[i].lien === "famille vincent") && (fields[i].presence === "present"))
      {
        totFamilleVincentPres = totFamilleVincentPres + 1;
      }

      if (fields[i].invitation === "vin")
      {
        totvin = totvin + 1;
      }
      if (fields[i].invitation === "repas")
      {
        totrepas = totrepas + 1;
      }
      if ((fields[i].presence === "present") &&
          (fields[i].invitation === "repas"))
      {
        totpresRepas = totpresRepas+1;
      }
      if ((fields[i].presence === "absent") &&
          (fields[i].invitation === "repas"))
      {
        totabsRepas = totabsRepas+1;
      }

      if (((typeof fields[i].presence === 'number') || (fields[i].presence === '')) ||
        (((typeof fields[i].menu === 'number') || (fields[i].menu === "")) && 
        ((fields[i].invitation === "repas") && (fields[i].presence === 'present'))))
      {
        relancedata.push({"prenom" : fields[i].prenom,
                          "nom" : fields[i].nom
        })
      }

      totFamille = totFamilleEmeline + totFamilleVincent;
      totAmis = totAmisEmeline + totAmisVincent;
      totResp = totPres + totAbs + totAttente;
      totabsVin = totAbs - totabsRepas;
    }

    setPresent({
      "name" : "nb present",
      "value" : totPres})
    setAbsent({
      "name" : "nb absent",
      "value" : totAbs})
    setAttente({
      "name" : "nb en attente",
      "value" : totAttente})
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

    setmenuEnfant({
      "name" : "Menu enfant",
      "value" : totMenuEnfant
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

    setFamilleEmelinePres({
      "name" : "Famille Emeline pres",
      "value" : totFamilleEmelinePres
    })

    setFamilleVincentPres({
      "name" : "Famille vincent pres",
      "value" : totFamilleVincentPres
    })

    setAmisEmelinePres({
      "name" : "Amis emeline pres",
      "value" : totAmisEmelinePres
    })

    setAmisVincentPres({
      "name" : "Amis Vincent pres",
      "value" : totAmisVincentPres
    })

    setInvitVin({
      "name" : "Nombre d'invitaion vin d'honneur",
      "value" : totvin
    })

    setInvitrepas({
      "name" : "Nombre d'invitaion repas",
      "value" : totrepas
    })

    setpresRepas({
      "name" : "Présent au repas",
      "value" : totpresRepas
    })

    setpresvin({
      "name" : "Présent au vin d'honneur",
      "value" : totPres - totpresRepas
    })

    setabsrepas({
      "name" : "Absent au repas",
      "value" : totabsRepas
    })

    setabsvin({
      "name" : "Absent au vin d'honneur",
      "value" : totabsVin
    })

    setRelance({
      "name": "personne à relancer",
      "value" : relancedata
    })

    setAttenteTab({
      "name": "personne en Attente",
      "value" : enAttenteTabData
    })
    
    
  },[fields])

  if (fields === null) {
    return <div>Chargement...</div>;
  }
  
    return (
      <div className='table-container'>
        <div className='stat-table-wrapper'>
          <table className='stat-table'>
            <caption>Tableau invitation</caption>
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <th >{tableData.name}</th>
                <th key={tableData.name}>{tableData.value}</th>
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
                <th >Invités au vin d'honneur</th>
                <th key = {invitVin.name}>{invitVin.value}</th>
              </tr>
              <tr>
                <th >Invités au Repas</th>
                <th key = {invitrepas.name}>{invitrepas.value}</th>
              </tr>

              
            </tbody>
          </table>
        </div>

        <div className='stat-table-resp-wrapper'>
          <table className='stat-table-resp'>
          <caption>Tableau des réponses</caption>
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <th >present</th>
                <th key = {present.name}>{present.value}</th>
              </tr>
              <tr>
                <th >absent</th>
                <th key = {absent.name}>{absent.value}</th>
              </tr>
              <tr>
                <th >{attente.name}</th>
                <th key = {attente.name}>{attente.value}</th>
              </tr>
              <tr>
                <th >nbr réponse</th>
                <th key = {response.name}>{response.value}</th>
              </tr>
              <tr>
              <th >Présent au repas</th>
              <th key = {presRepas.name}>{presRepas.value}</th>
              </tr>

              <tr>
                <th >Présent au vin d'honneur</th>
                <th key = {presvin.name}>{presvin.value}</th>
              </tr>

              <tr>
                <th >Absent au repas</th>
                <th key = {absrepas.name}>{absrepas.value}</th>
              </tr>
              <tr>
                <th >Absent au vin d'honneur</th>
                <th key = {absvin.name}>{absvin.value}</th>
              </tr>
              <tr>
                <th >famille emeline present</th>
                <th key = {familleEmelinePres.name}>{familleEmelinePres.value}</th>
              </tr>
              <tr>
                <th >famille vincent present</th>
                <th key = {familleVincentPres.name}>{familleVincentPres.value}</th>
              </tr>

              <tr>
                <th >amis vincent present</th>
                <th key = {amisVincentPres.name}>{amisVincentPres.value}</th>
              </tr>
              <tr>
                <th >amis emeline present</th>
                <th key = {amisEmelinePres.name}>{amisEmelinePres.value}</th>
              </tr>
            </tbody>
            </table>
          </div>


          <div className='stat-table-menu-wrapper'>
          <table className='stat-table-menu'>
          <caption>Tableau des menus</caption>
            <thead>
              
            </thead>
            <tbody>
              <tr>
                <th >Menu adulte</th>
                <th key = {menu.name}>{menu.value}</th>
              </tr>

              <tr>
                <th >Menu Enfant</th>
                <th key = {menuEnfant.name}>{menuEnfant.value}</th>
              </tr>

              <tr>
                <th >Menu Vegetarien</th>
                <th key = {vege.name}>{vege.value}</th>
              </tr>
              <tr>
                <th >Allergie</th>
                <th key = {allergie.name}>{allergie.value}</th>
              </tr>
            </tbody>
            </table>
          </div>

        <div className='stat-table-relance-wrapper'>
          <table className='stat-table-relance'>
          <caption>Tableau des relances</caption>
            <thead>
              
            </thead>
            <tbody>
            {(relance.value && Array.isArray(relance.value)) ? (
              relance.value.map((item, index) => (
                <tr key={index}>
                  <td>{item.nom}</td>
                  <td>{item.prenom}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">Aucune donnée disponible</td></tr>
            )}
            </tbody>
            </table>
        </div>

        <div className='stat-table-attente-wrapper'>
          <table className='stat-table-attente'>
          <caption>Tableau en attentes</caption>
            <thead>
              
            </thead>
            <tbody>
            {(attenteTab.value && Array.isArray(attenteTab.value)) ? (
              attenteTab.value.map((item, index) => (
                <tr key={index}>
                  <td>{item.nom}</td>
                  <td>{item.prenom}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">Aucune donnée disponible</td></tr>
            )}
            </tbody>
            </table>
        </div>

    </div>

        

        
    );
  };
  
  export default StatsGuest;
