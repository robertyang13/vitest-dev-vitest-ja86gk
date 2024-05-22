import React, { useState, useEffect } from 'react';
import { formatDuration } from './duration.ts';
interface TimerProps {
  second: number;
  callbackFunction: () => void;
}
function Timer<TimerProps>({ second, callbackFunction }): any {
  const [seconds, setSeconds] = useState<number>(second);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          callbackFunction();
          return second;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
  }, [second, callbackFunction]);

  return <h1>Timer: {formatDuration(seconds)} </h1>;
}
export default Timer;
