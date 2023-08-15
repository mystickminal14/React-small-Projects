import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Services from "./Services";
import Main from "./Main";

function App() {
  return (
    <>
   
      <Routes>
        <Route  path="/" element={<Main/>} >
        <Route index  path="/" element={<About/>} />
        <Route  path="/Contact" element={<Contact/>} />
        <Route  path="/Services" element={<Services/>} />
        <Route path="*" element={<Error/>} />
</Route>      </Routes>
    </>
  );
}

export default App;
