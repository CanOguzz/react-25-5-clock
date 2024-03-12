import React from "react";

import "./Clock.css";



export const Clock = () => {

    const{handleBreakIncrease, handleBreakDecrease, handleSessionIncrease, 
        handleSessionDecrease, handlePlay, handleReset, play, breakLength, 
        sessionLength, title, timeLeft, timeFormatter=()=>"25:00"} = {}
        
  return (
    <div>
    <div className="wrapper">
      <h2>25 + 5 Clock</h2>
      <div className="break-session-length">
        <div>
          <h3 id="break-label">Break Length</h3>
          <div>
            <button disabled={play} onClick={handleBreakIncrease} id="break-increment">Increase</button>
              <strong id="break-length">{breakLength}</strong>
            <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">Decrease</button>
          </div>
         </div>
         <div>
           <h3 id="session-label">Session Length</h3>
           <div>
            <button disabled={play} onClick={handleSessionIncrease} id="session-increment">Increase</button>
              <strong id="session-length">{sessionLength}</strong>
            <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">Decrease</button>
          </div>
         </div>
      </div>
      <div className="timer-wrapper">
        <div className="timer">
           <h2 id="timer-label">{title}</h2>
           <h3 id="time-left">{timeFormatter()}</h3>
        </div>
        <button onClick={handlePlay} id="start_stop">Start/Stop</button>
        <button onClick={handleReset} id="reset">Reset</button>
      </div>
    </div>
    <audio
      id="beep" 
      preload="auto"
      src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
    />
    </div>);
  
}

export default Clock;