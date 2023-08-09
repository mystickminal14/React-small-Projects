import "./App.css";
import {useState} from 'react';

function App() {
  const state= useState();
  const[date,update]=useState(new Date().toLocaleTimeString())
const up=()=>{
  update(new Date().toLocaleTimeString())
}
  return (
    <>
      <div className="box">
        <h1>{date}</h1>
        <button onClick={up}>Update Time</button>
      </div>
    </>
  );
}

export default App;
