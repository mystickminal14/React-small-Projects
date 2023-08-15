import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
export default function Link() {
  return (
    <>
      <div className="nav">
        <NavLink to="/" >
          About
        </NavLink>
        <NavLink to="/Contact" >
          Contact
        </NavLink>
        <NavLink to="/Services" >
          Services
        </NavLink>
      </div>
    </>
  );
}
