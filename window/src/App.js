import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[size,getSize]=useState(window.screen.width)
  const sizee=()=>{
    getSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",sizee)
    return ()=>{
      window.removeEventListener("resize",sizee)  
    }
  })
  return (
    <><div className="container">
    <h1>Your window size</h1>
    <h2>{size}</h2></div>
    </>
  );
}

export default App;
