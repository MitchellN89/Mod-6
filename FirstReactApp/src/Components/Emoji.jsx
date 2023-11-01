import { useState } from "react";

function Emoji() {
  const grin = <>&#128512;</>;
  const disappointed = <>&#128542;</>;

  const [mood, setMood] = useState(grin);

  function handleChangeMood() {
    if (mood.props.children === grin.props.children) {
      setMood(disappointed);
    } else {
      setMood(grin);
    }
  }

  return (
    <>
      <h2>Mood!!!</h2>
      <p style={{ fontSize: "20pt" }}>Mood is: {mood}</p>
      <button onClick={handleChangeMood}>Change Mood</button>
    </>
  );
}

export default Emoji;
