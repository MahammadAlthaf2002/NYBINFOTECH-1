import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setRunning(false);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const startTimer = () => {
    setTime(seconds);
    setRunning(true);
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(0);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>

      <input
        type="number"
        placeholder="Enter Seconds"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>

      <h3>Remaining Time: {time} Seconds</h3>
    </div>
  );
};

export default CountdownTimer;