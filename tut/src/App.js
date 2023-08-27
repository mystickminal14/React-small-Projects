import "./App.css";
import React, { useRef, useReducer } from 'react';
import Context from './Context.mjs'
import Comp from "./Comp";
function reducer(state,action){
  if (action.type==='inc'){
    return state+1
  }else if(action.type==='dec'){
    return state-1
  }else{
    return state
  }
}

function App() {

  const name = "minal";
  const avk = useRef(null);
const [state,dispatch]=useReducer(reducer, 0)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (avk.current) {
      console.log(avk.current.value);
    }
  };

  return (
    <>
      {name === 'minal' ? (
        <h1>Great, Minal!</h1>
      ) : (
        <h1>Time to play the game</h1>
      )}
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <label htmlFor='lucky'>Enter your name</label>
        <input type='text' ref={avk} id="lucky" />
        <button type="submit">Submit</button>
      </form>
      {avk.current && (
        <h1>Your name: {avk.current.value}</h1>
      )}

    <div className="class">
      <h1>
{state}
      </h1>
<button onClick={()=>{
  dispatch({type:'inc'})
}}>inc</button>  
<button onClick={()=>{
dispatch({type:'dec'})
}}>dec</button>     </div>


]
    </>
  );
}

export default App;
