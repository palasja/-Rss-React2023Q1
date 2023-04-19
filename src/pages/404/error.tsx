import React from 'react';
import Header from '../../components/header';
import './error.css';

const Error = () => {
  return (
    <>
      <Header />
      <main className="main_error">
        <h2 className="main_error_message">Something goes wrong... Please open page later</h2>
      </main>
    </>
  );
};

export default Error;
