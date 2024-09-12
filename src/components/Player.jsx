import { useState, useRef } from "react";

/* Player component allows setting and displaying the player name.
   The useRef hook is used to directly access and manipulate the input field. */
export default function Player() {
  const playerName = useRef(); // Ref to access the input element directly
  const [enteredPlayerName, setEnteredPlayerName] = useState(""); // State to store the entered name

  function clickHandler() {
    setEnteredPlayerName(playerName.current.value); // Set the entered name using the ref
    playerName.current.value = ""; // Clear the input field using the ref
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName || "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />{" "}
        {/* Ref used to access the input element */}
        <button onClick={clickHandler}>Set Name</button>{" "}
        {/* Trigger to set the name */}
      </p>
    </section>
  );
}
