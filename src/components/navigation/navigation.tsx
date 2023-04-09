import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navgation = () => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          Home
        </NavLink>
        <NavLink to="/NewCard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          New Card
        </NavLink>
        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          About
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navgation;
