import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFirstName((val) => {
      return{
        ...val,
        [name]:value
      }
      /*if (name === "fname") {
        return {
          fname: value,
          lname: val.lname,
          phone: val.phone,
          email: val.email,
        };
      } else if (name === "lname") {
        return {
          fname: val.fname,
          lname: value,
          email: val.email,
          phone: val.phone,
        };
      } else if (name === "phone") {
        return {
          fname: val.fname,
          lname: val.lname,
          email: val.email,
          phone: value,
        };
      } else {
        return {
          fname: val.fname,
          lname: val.lname,
          phone: val.phone,
          email: value,
        };
      }*/
    });
  };
  const [fullNameDisplay, setFullNameDisplay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, email, phone } = firstName;
    let fullName = `${fname} ${lname}`;
   
    setFullNameDisplay(fullName);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="box">
        <h1>
          {fullNameDisplay} 
        </h1>
        <p> {firstName.email}</p>
        <p> {firstName.phone}</p>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName.fname}
          name="fname"
          placeholder="Enter your first name"
        />
        <input
          type="text"
          onChange={handleFirstNameChange}
          
          name="lname"
          placeholder="Enter your last name"
        />
        <input
          type="email"
          onChange={handleFirstNameChange}
          value={firstName.email}
          name="email"
          placeholder="Enter your  email name"
        />
        <input
          type="number"
          onChange={handleFirstNameChange}
          value={firstName.phone}
          name="phone"
          placeholder="Enter your phone number"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
