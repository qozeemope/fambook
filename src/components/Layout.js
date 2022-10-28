import React from "react";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <div className="nav">
      <NavLink to="/" className={"navlink"}>
        Home
      </NavLink>
      <NavLink to="/about" className={"navlink"}>
        About
      </NavLink>
      <NavLink to="/user" className={"navlink"}>
        User
      </NavLink>
    </div>
  );
}

export default Layout;
