import React, { useState } from 'react';
import './../styles/Commentaires.css'

// Composant pour afficher un seul commentaire
const Comment = ({ text }) => (
  <div className="comment">
    <p>{text}</p>
  </div>
);

// Composant principal de la boîte de commentaires
const CommentBox = ({Guest}) => {
const [guest,setGuest] = useState(Guest);
  const [comments, setComments] = useState([]); // État pour stocker les commentaires
  const [comment, setComment] = useState('');   // État pour stocker le texte du formulaire

  // Fonction pour gérer le changement de texte dans le formulaire
  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (comment.trim()) {   // Vérifie que le commentaire n'est pas vide
      setComments([...comments, comment]); // Ajoute le nouveau commentaire à la liste
      setComment(''); // Réinitialise le formulaire
    }
  };
  const [defaultText,setDefaultText] = useState (initDefaultText(Guest));

  function initDefaultText(guestData)
  {
    if (guestData.commentaires =="")
        {
            let texte = "Ajoutez un commentaire..."
            return texte
        }
    else
    {
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
        {comments.map((c, index) => (
          <Comment key={index} text={c} />
        ))}
      </div>
    </div>
  );
};

export default CommentBox;