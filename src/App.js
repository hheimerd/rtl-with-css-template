import React from "react";
import styles from "./App.module.css";

function App() {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState("");

  return (
    <div>
      <input
        type="text"
        className={styles.input}
        data-testid="input"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button className={styles.button} onClick={() => setClicked(true)}>
        {clicked ? "clicked" : "click me"}
      </button>
    </div>
  );
}

export default App;
