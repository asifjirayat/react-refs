import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setenteredPlayerName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    setenteredPlayerName(() => playerName.current.value);
  }

  return (
    <section id="player">
      <h2>
        Welcome{" "}
        {enteredPlayerName && enteredPlayerName.length > 0
          ? enteredPlayerName
          : "Unknown Entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
