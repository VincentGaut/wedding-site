import React from 'react';
import './../styles/Schedule.css';
import WeddingCountdown from './coutdown';

const Schedule = () => (
  <div>
    <section id="schedule">
      <h2>Schedule</h2>
      <ul>
        <li><strong>Ceremony:</strong> 3:00 PM at St. John’s Church</li>
        <li><strong>Reception:</strong> 5:00 PM at The Grand Hall</li>
      </ul>
    </section>
    <div>
    <WeddingCountdown></WeddingCountdown>
    </div>
  </div>
);

export default Schedule;
