
import './App.css';
import {useState} from 'react';
function App() {
  const state=useState();
  const [time,uotim]=useState(new Date().toLocaleTimeString())
  const update=()=>{
    uotim(new Date().toLocaleTimeString())
  }
  setInterval(update,1000)
  return (
   
   <>
   <h1>{time}</h1>
   </>
  );
}

export default App;
