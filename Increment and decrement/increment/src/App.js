import "./App.css";
import {useState}  from 'react';
function App() {
  const [val,upVal]=useState(0)
  console.log(val)
  const increase=()=>{
   upVal(val+1)
  }
  const decrease=()=>{
    upVal(val-1)
    if(val===0){
      alert('cant go beyond zero')
      upVal(0)
    }
   }
  return (
    <>
      <div className="box">
        <h1>{val}</h1>
        <div className="btns">
          <button onClick={increase}>Increment</button>
          <button onClick={decrease}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
