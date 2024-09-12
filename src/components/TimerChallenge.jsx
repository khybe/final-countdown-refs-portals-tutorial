import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

/* TimerChallenge component manages a countdown timer and interacts with ResultModal using Refs.
   The useRef hook is used for both the timer and modal dialog. */
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // Ref to store the timer ID for interval control
  const dialog = useRef(); // Ref to access the modal dialog

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); // State to store time in milliseconds

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current); // Stop the timer when it reaches 0
    dialog.current.open(); // Open the modal when time runs out
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000); // Reset the timer to the initial time
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10); // Decrease time every 10ms
    }, 10);
  }

  function handleStop() {
    dialog.current.open(); // Open the modal and stop the timer
    clearInterval(timer.current);
  }

  return (
    <>
      {/* Modal to display the result, passed down as a ref */}
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
