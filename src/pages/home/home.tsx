import React, { useEffect, useState } from 'react';
import './home.css';
import { Character } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import LotrCard from '../../components/lotrCard';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [characters, setCharacters] = useState<Character[]>([]);


  useEffect(() => {
    let isSubscribed = true;
    const getCharacters = async () => {
      
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BTQ_p0KTKzxQIhvXZ2u6'
      }
      const resp = await fetch('https://the-one-api.dev/v2/character?limit=20', {headers: headers});
      const arr = await resp.json();
      if(isSubscribed) setCharacters(arr.docs);
      console.log(resp.status);
      console.log(arr);
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
    
    
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="main_search">
          <Search
            onChange={(newName: string) => setSearchValue(newName)}
            curSearchValue={searchValue}
          />
        </div>
        <div className="main_cards">
          {characters.map(ch => <LotrCard key={ch._id} name={ch.name.toLocaleUpperCase()} race={ch.race} wikiUr={ch.wikiUrl} />)}
        </div>
      </main>
    </>
  );
};

export default Home;
