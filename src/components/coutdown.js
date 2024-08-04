import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  color: #000;
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

const CountdownValue = styled.span`
  font-size: 3rem;
`;

const CountdownLabel = styled.span`
  font-size: 0.8rem;
`;



const WeddingCountdown = () => {
    const weddingDate = new Date('2025-05-03');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    function calculateTimeLeft() {
      const difference = +weddingDate - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    }
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    return (
      <CountdownContainer>
        <CountdownItem>
          <CountdownValue>{timeLeft.days || '0'}</CountdownValue>
          <CountdownLabel>Days</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{timeLeft.hours || '0'}</CountdownValue>
          <CountdownLabel>Hours</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{timeLeft.minutes || '0'}</CountdownValue>
          <CountdownLabel>Minutes</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownValue>{timeLeft.seconds || '0'}</CountdownValue>
          <CountdownLabel>Seconds</CountdownLabel>
        </CountdownItem>
      </CountdownContainer>
    );
  };
  
  export default WeddingCountdown;
