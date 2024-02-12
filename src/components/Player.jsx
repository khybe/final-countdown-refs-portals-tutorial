import { useState } from "react";

// Initialize state variables for managing user input and submission status
export default function Player() {
  // State variable to store the entered player name
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // State variable to track whether the form has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Function to handle changes in the input field
  function changeHandler(event) {
    // Reset the submission status to false when the input changes
    setSubmitted(false);
    // Update the entered player name based on user input
    setEnteredPlayerName(event.target.value);
  }

  // Function to handle button click for submitting the form
  function clickHandler() {
    // Set the submission status to true when the button is clicked
    setSubmitted(true);
  }

  // Render the Player component
  return (
    <section id="player">
      {/* Display a welcome message with the entered player name or a default if not submitted */}
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      {/* Form for entering player name with input field and submit button */}
      <p>
        {/* Input field for entering the player name, with two-way binding to the state */}
        <input type="text" onChange={changeHandler} value={enteredPlayerName} />
        {/* Button to trigger the submission of the form */}
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
