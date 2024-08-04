import React, { useState,useEffect,useRef } from 'react';
import './../styles/Organisation_data.css';

import { Pie  } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Enregistre les composants ChartJS que tu utilises
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const StatsGuest = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    // Simule un chargement de données
    setTimeout(() => {
      setData({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: 'My Dataset',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    }, 1000); // Délai pour simuler le chargement
  }, []);

  useEffect ( () => {
    console.log(data)
    
    
  },[data])

  
    // Assure-toi que les échelles sont correctement configurées si elles sont utilisées
    // scales: {
    //   x: { beginAtZero: true },
    //   y: { beginAtZero: true },
    // },
  

  if (!data) {
    return <div>Chargement...</div>;
  }
  
    return (
      <div>
        <h2>Graphique des Ventes</h2>
        <Pie data={data}  />
      </div>
    );
  };
  
  export default StatsGuest;
