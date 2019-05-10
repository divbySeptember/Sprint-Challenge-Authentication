import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      &nbsp;|&nbsp;
      <NavLink to="/login">Login</NavLink>
      &nbsp;|&nbsp;
      <NavLink to="/register">Register</NavLink>
      &nbsp;|&nbsp;
      <NavLink to="/jokes"> Jokes</NavLink>
    </>
  );
};

export default Nav;
