import "./App.css";
import { useState } from "react";
function App() {
  const state = useState();
  
  const [color, uotim] = useState('skyblue');
  const [text,uptext]=useState('Click me')

const getUpdate=()=>{
    uotim('yellow')
    uptext('bright day ☀️')
}
const style={
  background:color
}
const getUpdate2=()=>{
  uotim('red')
  uptext('hot 🌶️')
}

  return (
    <>
      <div  style ={style} className="box">
        <button onMouseOver={getUpdate} onDoubleClick={getUpdate2}>{text} </button>
      </div>
    </>
  );
}

export default App;
