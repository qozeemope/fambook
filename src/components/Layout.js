import React from "react";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <div className="navigation">
      <h1 className="logo">FamBook</h1>
      <div className="nav">
        <NavLink to="/" className={"navlink"}>
          Home
        </NavLink>
        <NavLink to="/user" className={"navlink"}>
          User
        </NavLink>
        <NavLink to="/about" className={"navlink"}>
          About
        </NavLink>
        <NavLink to="/profile" className={"navlink"}>
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Layout;
