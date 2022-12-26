import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul>
        {/* <li>Home</li>
        <li>Contact</li> */}
        {/* <a href="/">Home</a> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/list">List</NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
