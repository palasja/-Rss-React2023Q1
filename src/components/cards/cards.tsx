import React from 'react';
import LotrCard from '../lotrCard';
import './cards.css'
import { Character } from '../../types';

type CardProp = {
  characters: Character[] | null;
}

const Cards = (props: CardProp) => {
  const { characters } = props;
  return (
    <div className="main_cards">
      { !characters && <p>Loading...</p> }
      { (characters !== null && characters.length == 0 ) && <h3>No characters with that name</h3> }
      { characters !== null && characters.map(ch => <LotrCard key={ch._id} name={ch.name.toLocaleUpperCase()} race={ch.race} wikiUrl={ch.wikiUrl} />) }
  </div>
  );
}

export default Cards;