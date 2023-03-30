import React from 'react';
import Header from '../../components/header';
import './about.css';

const About = () => {
  return (
    <>
      <Header />
      <main className="main-about">
        <h2 className="main-about_name">About Food Shop</h2>
        <p className="main-about_develoder">Yakubenka Ivan</p>
        <a href="mailto: palasja@gmail.com" className="main-about_email">
          palasja@gmail.com
        </a>
      </main>
    </>
  );
};

export default About;
