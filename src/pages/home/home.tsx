import React from 'react';
import './home.css';
import Search from '../../components/search';
import Header from '../../components/header';
import Cards from '../../components/cards/cards';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Search />
        <Cards />
      </main>
    </>
  );
};

export default Home;
