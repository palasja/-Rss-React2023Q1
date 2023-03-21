import React from 'react';
import { Component, ReactNode } from 'react';
import CurrentRoute from '../curentRoute';
import Navigation from '../navigation';
import './header.css';

class Header extends Component {
  render(): ReactNode {
    return (
      <header className="header">
        <h1>
          <a href="/" className="header_logo">
            FoodShop
          </a>
        </h1>
        <Navigation />
        <CurrentRoute />
      </header>
    );
  }
}

export default Header;
