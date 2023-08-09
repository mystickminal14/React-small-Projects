import "./App.css";
import { useState } from "react";
function App() {
  const state = useState();

  const [val, upval] = useState(" ");
  const [sec, bbc] = useState("");
  const chane = (e) => {
    upval(e.target.value);
  };
  const channne = () => {
    bbc(val);
  };

  return (
    <>
      <div className="box">
        <h1>Hello {sec}</h1>
        <input
          type="text"
          onChange={chane}
          value={val}
          placeholder="enter your name"
        />
        <button onClick={channne}>Submit </button>
      </div>
    </>
  );
}

export default App;
