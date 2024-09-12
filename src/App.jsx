import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

/* Main component that renders the Player and TimerChallenge components.
Refs are used in Player to directly access the input field, and in TimerChallenge
to handle timers and modal dialogs using ResultModal (which uses Portals). */

function App() {
  return (
    <>
      {/* Player component uses Refs for input field handling */}
      <Player />

      {/* TimerChallenge components pass the targetTime prop and use Refs and Portals */}
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
