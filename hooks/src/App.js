import "./App.css";
import {useState} from "react";


function App() {
  const state=useState()
  const [count,setCount]=useState(0)
 const increase=()=>{
  setCount(count+1);
 }
  return (
    <>
      <div className="box">
        <h1>{count}</h1>
        <button onClick={increase} >Increment</button>
      </div>
    </>
  );
}

export default App;
