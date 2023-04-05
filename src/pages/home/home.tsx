import React, { useEffect, useState } from 'react';
import './home.css';
import { Character, CharacterResponse } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import LotrCard from '../../components/lotrCard';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    setCharacters(null);
    const getCharacters = async () => {
      
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BTQ_p0KTKzxQIhvXZ2u6'
      }
      const resp = await fetch(`https://the-one-api.dev/v2/character?name=/${searchValue}/i`, {headers: headers});
      const arr:CharacterResponse  = await resp.json();
      setCharacters(arr.docs);
    }
    getCharacters();
    // const fetchData = async () => {
    //   const headers = {
    //     'Accept': 'application/json',
    //     'Authorization': 'Bearer BTQ_p0KTKzxQIhvXZ2u6'
    //   }
    //   const rawCh = await fetch('https://the-one-api.dev/v2/character', {
    //     headers: headers
    //   })
    //   const ch = await rawCh.json();
    //   console.log(ch);
      // const quotes = await rawQuotes.json();
      // const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      // setQuote(quote.dialog)
      // const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
      // const characters = await rawCharacters.json();
      // const character = characters.docs[0];
      // setCharacter(character.name)
    // };

    // fetchData();
    
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
        <div className="main_search">
          <Search
            onSubmit={handleSubmit}
            curSearchValue={searchValue}
          />
        </div>
        <div className="main_cards">
          { !characters && <p>Loading...</p> }
          { (characters !== null && characters.length == 0 ) && <h3>No characters with that name</h3> }
          { characters !== null && characters.map(ch => <LotrCard key={ch._id} name={ch.name.toLocaleUpperCase()} race={ch.race} wikiUr={ch.wikiUrl} />) }
        </div>
      </main>
    </>
  );
};

export default Home;
