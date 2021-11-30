import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ minutes = 5, seconds = 0 }) => {
  const [paused, setPaused] = useState(false);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    minutes: parseInt(minutes, 10),
    seconds: parseInt(seconds, 10),
  });

  const tick = () => {
    if (paused || over) return;

    if (time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.seconds === 0) {
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">
      <span>{`${time.minutes.toString().padStart(2, "0")}:${time.seconds
        .toString()
        .padStart(2, "0")}`}</span>
      <div className="over">{over ? "Time's up!" : ""}</div>
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default Timer;
