import React, { useState } from 'react';
import '../styles/Timer.css';

export default function Timer(Props) {
  const [counter, setCounter] = useState(Props.counter);

  const startTimer = (seconds) => {
    const zeroLeft = (n) => Math.floor(n).toString().padStart(2, '0');

    const min = zeroLeft((seconds / 60) % 60);
    const sec = zeroLeft((seconds % 60) % 60);

    return `${min}:${sec}`;
  };

  return (
    <div className='counter'>
      <div className='counter__number'>{startTimer(Props.counter)}</div>
    </div>
  );
}
