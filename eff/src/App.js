import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
function App() {
  const [val, setA] = useState(0);
 const click=() => {
  setA(val + 1);

}
useEffect(()=>{
  if(val>=1){

    document.title=`message(${val})`
  }
})
const [poke,setpoke]=useState()
const setNew=(e)=>{
  setpoke(e.target.value)
}
const [namePoke,getname]=useState()
const [moves,getmve]=useState()

useEffect(() => {
  async function getData() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    console.log(res);
    getname(res.data.name)
    getmve(res.data.moves.length)
  }
  getData();
}, [poke]);


  return (
    <>
      <h1>{val}</h1>
      <button
        onClick={click}
      >
        Click me {val}
      </button>
      <br/>
      <h1>You have selected {poke}</h1>
      <h1>my name is {namePoke} and i have {moves}</h1>
      <select value={poke} onChange={setNew}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="25">25</option>
      </select>

    </>
  );
}

export default App;
