import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

class Navgation extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav_list">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            Home
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            About
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Navgation;
