import React, { useState, useEffect } from 'react';
import Button from './Button';
import '../styles/CounterBox.css';
import Timer from './Timer';
import { useInterval } from './useInterval';
export default function CounterBox() {
  const [status, setStatus] = useState('Descansando');
  const [time, setTime] = useState(1500);
  const [isWorking, setIsWorking] = useState(false);
  const [timeCouting, setTimeCouting] = useState(false);

  const startTimer = () => {
    setStatus('Trabalhando');
    setTimeCouting(true);
    setIsWorking(true);

    setIsWorking(true);
    setTimeCouting(true);
  };

  const stopTimer = () => {
    setIsWorking(false);
    setTimeCouting(!timeCouting); // true -> false
  };

  useInterval(
    () => {
      setTime((time) => time - 1);
    },
    isWorking ? 1000 : null
  );

  return (
    <>
      <div className='container'>
        Você está: {status}
        <br />
        <Timer counter={time} />
        <div className='buttons'>
          <Button
            titulo='start'
            onClick={() => {
              startTimer();
            }}
          />
          <Button
            titulo='stop'
            onClick={() => {
              stopTimer();
            }}
          />
          <Button titulo='descansar' />
          <Button titulo='restart' />
        </div>
      </div>
    </>
  );
}
