import React, { useEffect, useState } from 'react';
import './home.css';
import { Character } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import Cards from '../../components/cards/cards';
import API from '../../helper/contsAPI';
import { getFetchData } from '../../helper/fetchData';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  useEffect(() => {
    setCharacters(null);
    const getCharacters = async () => {
      try{
        const data = await getFetchData(`${API.host}/character?name=/^${searchValue}/i`) as Character[] ;
        setCharacters(data);
      } catch(e){
        setErrorResponse(e.message);
      }
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
        {errorResponse ? <p className="errorMessge">{errorResponse}</p> : <Cards characters={characters} />}
      </main>
    </>
  );
};

export default Home;
