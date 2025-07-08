import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State 1: Tracks the remaining seconds.
  // We added an input for the user to set the initial value, so it can start at 0.
  const [secondsLeft, setSecondsLeft] = useState(0);

  // State 2: Tracks if the timer is currently active (our "on/off switch").
  const [isActive, setIsActive] = useState(false);

  // State 3: Tracks the initial time set by the user in the input field.
  const [initialTime, setInitialTime] = useState(10);


  // useEffect Hook: Handles the timer, which is a "side effect".
  useEffect(() => {
    // Define a variable to hold the timer's ID so we can clear it later.
    let intervalId = null;

    // Only start the timer if it's active and there is time remaining.
    if (isActive && secondsLeft > 0) {
      intervalId = setInterval(() => {
        // Use the functional update form to safely decrement the seconds.
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000);
    } 
    // Automatically stop the timer when it reaches 0.
    else if (secondsLeft === 0) {
      setIsActive(false);
    }

    // This is the "cleanup function" of useEffect.
    // It's called before the component re-renders (due to a change in dependencies) or when it unmounts.
    return () => {
      // Make sure to clear the previous timer to prevent multiple timers running in parallel.
      clearInterval(intervalId);
    };

  }, [isActive, secondsLeft]); // Dependencies: The effect re-runs when isActive or secondsLeft changes.

  // --- Event Handler Functions ---

  // Handles toggling between Start and Pause.
  const handleToggle = () => {
    // If the timer is not active and there's time to run, start it.
    if (!isActive && secondsLeft > 0) {
      setIsActive(true);
    } else {
      // Otherwise, pause it.
      setIsActive(false);
    }
  };

  // Handles the reset action.
  const handleReset = () => {
    setIsActive(false); // Pause the timer.
    setSecondsLeft(initialTime); // Reset the time to the user-defined initial value.
  };

  // Handles changes in the input field.
  const handleInputChange = (event) => {
    const newTime = parseInt(event.target.value, 10);
    // Ensure the new value is a valid, non-negative number.
    if (!isNaN(newTime) && newTime >= 0) {
      setInitialTime(newTime);
      setSecondsLeft(newTime); // Update the display in real-time.
      setIsActive(false); // Pause the timer while editing.
    }
  };


  // --- Render JSX ---

  return (
    <div className="container">
      <h1>Versatile Countdown Timer</h1>

      <div className="timer-display">
        {secondsLeft}
      </div>

      <div className="input-group">
        <label htmlFor="time-input">Set Time (seconds):</label>
        <input
          id="time-input"
          type="number"
          value={initialTime}
          onChange={handleInputChange}
          disabled={isActive} // Disable the input while the timer is running.
        />
      </div>

      <div className="button-group">
        <button onClick={handleToggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
