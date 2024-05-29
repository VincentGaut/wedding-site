import React, { useState } from 'react';
import firebase from './config';
import './../styles/Commentaires.css'

// Composant pour afficher un seul commentaire
const Comment = ({ text }) => (
  <div className="comment">
    <p>{text}</p>
  </div>
);

// Composant principal de la boîte de commentaires
const Commentaires = ({Guest}) => {
const [guest,setGuest] = useState(Guest);
  const [comments, setComments] = useState([]); // État pour stocker les commentaires
  const [comment, setComment] = useState('');   // État pour stocker le texte du formulaire
const [dataSend,setDataSend] = useState(false);

  const ref = firebase.firestore().collection("guest");

  function setInfoGuestDB ()
  {
    
    const array = Object.keys(Guest)
    let dataGuest = {};
    for (let i=0;i<array.length;i++)
      {
        
        dataGuest[array[i]] = sessionStorage.getItem(array[i])
          
      }
      

    if (Object.keys(dataGuest).length !=0)
      {
        ref 
        .doc(dataGuest.id)
        .set(dataGuest)
        .catch((err) => {
          console.error(err)
    })
      }
    
  }
  // Fonction pour gérer le changement de texte dans le formulaire
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (comment.trim()) {   // Vérifie que le commentaire n'est pas vide
      
      setComments([...comments, comment]); // Ajoute le nouveau commentaire à la liste
      sessionStorage.setItem('commentaires', comment);
      
      setComment(''); // Réinitialise le formulaire

    }
    setInfoGuestDB()
  };
  const [defaultText,setDefaultText] = useState (() => initDefaultText(Guest));

  function initDefaultText(guestData)
  {
    if (guestData.commentaires =="")
        {
            let texte = "Ajoutez un commentaire..."
            sessionStorage.setItem('commentaires', '');
      
            return texte
        }
    else
    {
      sessionStorage.setItem('commentaires', guestData.commentaires);
      return guestData.commentaires
    }
  }

  return (
    <div className="comment-box">
      <h2>Commentaires</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder={defaultText}
          rows="4"
          cols="50"
        />
        <button type="submit">Ajouter un commentaire</button>
      </form>
      <div className="comment-list">
        
      </div>
    </div>
  );
};

export default Commentaires;