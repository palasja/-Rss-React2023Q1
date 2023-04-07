import React, { useEffect, useState } from 'react';
import './home.css';
import { Character, LotrResponse } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import Cards from '../../components/cards/cards';
import API from '../../helper/contsAPI';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    setCharacters(null);
    const getCharacters = async () => {
      const resp = await fetch(`${API.host}/character?name=/^${searchValue}/i`, {
        headers: API.headers,
      });
      const arr: LotrResponse = await resp.json();
      setCharacters(arr.docs as Character[]);
    };
    getCharacters();
  }, [searchValue]);

  const handleSubmit = (value: string) => {
    setSearchValue(value);
    localStorage.setItem('searchValue', value);
  };
  return (
    <>
      <Header />
      <main className="main">
        <Search onSubmit={handleSubmit} curSearchValue={searchValue} />
        <Cards characters={characters} />
      </main>
    </>
  );
};

export default Home;
