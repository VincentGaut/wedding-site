import React, { useState } from 'react';
import { FaClockRotateLeft } from "react-icons/fa6";


import './../styles/Programme.css';

const events = [
    {
      time: "11h30-12h",
      title: "Rdv à la mairie",
      icon: "🏛️",
    },
    {
        time: "12h-15h",
        title: "Le repas du midi est libre, nous nous retrouverons à 15h à Artres",
        icon: "🍽️",
      },
    {
      time: "15h30-17h",
      title: "Cérémonie laïque !",
      icon: "💍",
    },
    {
      time: "17h",
      title: "Vin d'honneur",
      icon: "🍷",
    },
    {
      time: "20h00",
      title: "Bon appétit !",
      icon: "🍽️",
    }
  ];
  const TimelineEvent = ({ time, title, icon }) => {
    return (
      <div style={styles.event}>
        <div style={styles.icon}>{icon}</div>
        <div style={styles.details}>
          <span style={styles.time}>{time}</span>
          <h4 style={styles.title}>{title}</h4>
        </div>
      </div>
    );
  };

  const styles = {
    timelineContainer: {
      padding: "20px",
      fontFamily: "'Courier New', monospace",
      maxWidth: "600px",
      marginBottom : "20px",
      position: "relative",
      border: "3px solid #b9b7b7",
    borderRadius: "10px",
    backgroundColor: "##dddddd",
    display:"flex",
    flexdirection: "column",
    alignitems: "center"
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "2rem",
    },
    timeline: {
      position: "relative",
      padding: "20px 0",
      borderLeft: "2px solid #C19A6B", // La ligne dorée au milieu
    },
    event: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "20px",
      position: "relative",
    },
    icon: {
      fontSize: "2rem",
      marginRight: "15px",
      flexShrink: "0",
    },
    details: {
      marginLeft: "20px",
      textAlign: "left",
    },
    time: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      color: "#555",
    },
    title: {
      fontSize: "1.4rem",
      margin: "0",
      color: "#333",
    },
  };

const Programme = () => {

    return (
    <div>
        <div style={styles.timelineContainer}>
            <h2 style={styles.heading}>Programme</h2>
            <div style={styles.timeline}>
                {events.map((event, index) => (
                <TimelineEvent
                    key={index}
                    time={event.time}
                    title={event.title}
                    icon={event.icon}
                />
                ))}
            </div>
            <div className='div-chat'></div>
        </div>
        
    </div>
    );
}

const timelineStyles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    marginBottom: "40px",
  },
};

export default Programme