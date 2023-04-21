import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navgation = () => {
  const [isServer, setIsServer] = useState(false);
  useEffect(() => {
    setIsServer(true);
  }, []);
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
      <li>{isServer ? 'Server' : 'Client'}</li>
    </nav>
  );
};

export default Navgation;
