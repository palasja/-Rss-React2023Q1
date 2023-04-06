import React, { useEffect, useState } from 'react';
import './home.css';
import { Character, LotrResponse } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import Cards from '../../components/cards/cards';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    setCharacters(null);
    const getCharacters = async () => {
      // ------> Move for import here and full card
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BTQ_p0KTKzxQIhvXZ2u6'
      }
      const resp = await fetch(`https://the-one-api.dev/v2/character?name=/^${searchValue}/i`, {headers: headers});
      const arr:LotrResponse  = await resp.json();
      setCharacters(arr.docs as Character[]);
    }
    getCharacters();
    // setCharacters(null);
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  const handleSubmit = (value: string) => {
    setSearchValue(value);
  }
  return (
    <>
      <Header />
      <main className="main">
          <Search
            onSubmit={handleSubmit}
            curSearchValue={searchValue}
          />
          <Cards characters={characters} />
      </main>
    </>
  );
};

export default Home;
