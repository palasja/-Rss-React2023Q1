import React from 'react';
import { Component, ReactNode } from 'react';
import './error.css';

class Error extends Component {
  render(): ReactNode {
    return (
      <main className="main_error">
        <h2 className="main_error_message">Something goes wrong... Please open page later</h2>
      </main>
    );
  }
}

export default Error;
