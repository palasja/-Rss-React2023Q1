import React from "react";
import { Component } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./navigation.css"

class Navgation extends Component{
  render(){
    return <nav>
        <ul>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
        </ul>
    </nav>
  };
}

export default Navgation;