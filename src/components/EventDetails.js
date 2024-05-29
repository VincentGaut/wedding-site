import React from 'react';

function EventDetails() {
  return (
    <div>
      <h2>Détails de l'événement</h2>
      <p>Date : [Date]</p>
      <p>Heure : [Heure]</p>
      <p>Lieu : [Adresse] <a href="https://maps.google.com/?q=[Adresse]">Voir sur la carte</a></p>
    </div>
  );
}

export default EventDetails;
