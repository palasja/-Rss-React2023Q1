import React from 'react';
import CurrentRoute from '../curentRoute';
import Navigation from '../navigation';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <a href="/" className="header_logo">
          LOTR API
        </a>
      </h1>
      <Navigation />
      <CurrentRoute />
    </header>
  );
};

export default Header;
