import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello ${firstName} ${lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="box">
        <h1>{greeting}</h1>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="Enter your first name"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Enter your last name"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
