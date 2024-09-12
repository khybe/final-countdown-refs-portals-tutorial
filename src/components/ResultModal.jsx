import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

/* ResultModal component uses Portals to render the dialog outside of the component tree.
   The forwardRef and useImperativeHandle hooks are used to expose methods to parent components. */
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef(); // Ref to control the dialog element

  const userLost = remainingTime <= 0; // Determine if the user lost
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100); // Calculate score

  /* Exposing the open method to parent components using useImperativeHandle */
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal(); // Open the dialog when called
      },
    };
  });

  /* Using Portals to render the dialog outside of the DOM hierarchy */
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal") // Portal renders dialog here
  );
});

export default ResultModal;
