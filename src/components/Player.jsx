import { useState, useRef } from "react";

// Two-Way-Binding with useRef hook
export default function Player() {
  // Create a useRef to hold a reference to the input element, enabling direct access to its properties.
  const playerName = useRef();

  // Create a state variable to hold the entered player name, initializing it with an empty string.
  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  // Define a function that will be triggered when the "Set Name" button is clicked.
  function clickHandler() {
    // Update the state variable enteredPlayerName with the current value of the input element using the useRef.
    setEnteredPlayerName(playerName.current.value);

    // Using the ref (playerName) to directly manipulate the DOM, set the value of the input field to an empty string,
    // effectively clearing the input field after the player name has been submitted.
    playerName.current.value = "";
  }

  // Render the Player component, providing an input field and a button for setting the player name.
  return (
    <section id="player">
      {/* Display a welcome message with the entered player name or a default "unknown entity" if no name is entered. */}
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        {/* Create an input field with a reference to playerName using the useRef hook. */}
        <input ref={playerName} type="text" />
        {/* Trigger the clickHandler function when the "Set Name" button is clicked. */}
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
