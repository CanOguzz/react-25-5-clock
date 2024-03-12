import React from "react";
import { useState, useEffect } from "react";
import "./Clock.css";

export const Clock = () => {
  const handleBreakIncrease = () => {
    //used 60 because we represent time in seconds and it cant be bigger than 1 hour
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  };
  //it cant go lower than 1 minute
  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
    }
  };

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
    }
  };

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [play, setPlay] = useState(false);
  const [timingType, setTimingType] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);

  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formatedMinutes}:${formatedSeconds}`;
  };

  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
    }
  }, 1000);
  const handlePlay = () => {
    clearTimeout(timeout);
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  const { handleReset } = {};

  const title = timingType === "Session" ? "Session" : "Break";
  return (
    <div>
      <div className="wrapper">
        <h2>25 + 5 Clock</h2>
        <div className="break-session-length">
          <div>
            <h3 id="break-label">Break Length</h3>
            <div>
              <button
                disabled={play}
                onClick={handleBreakIncrease}
                id="break-increment"
              >
                Increase
              </button>
              <strong id="break-length">{breakLength}</strong>
              <button
                disabled={play}
                onClick={handleBreakDecrease}
                id="break-decrement"
              >
                Decrease
              </button>
            </div>
          </div>
          <div>
            <h3 id="session-label">Session Length</h3>
            <div>
              <button
                disabled={play}
                onClick={handleSessionIncrease}
                id="session-increment"
              >
                Increase
              </button>
              <strong id="session-length">{sessionLength}</strong>
              <button
                disabled={play}
                onClick={handleSessionDecrease}
                id="session-decrement"
              >
                Decrease
              </button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>
            <h3 id="time-left">{timeFormatter()}</h3>
          </div>
          <button onClick={handlePlay} id="start_stop">
            Start/Stop
          </button>
          <button onClick={handleReset} id="reset">
            Reset
          </button>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default Clock;