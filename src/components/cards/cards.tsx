import React, { useState } from 'react';
import LotrCard from '../lotrCard';
import './cards.css'
import { Character } from '../../types';
import { createPortal } from 'react-dom';
import ModalContent from '../modalContent';

type CardProp = {
  characters: Character[] | null;
}

const Cards = (props: CardProp) => {
  const [showModal, setShowModal] = useState(false);
  const [showCharId, setshowCharId] = useState('');
  const { characters } = props;

  const onShow = (id:string) => {
    setShowModal(true);
    setshowCharId(id);
  }
  return (
    <div className="main_cards">
      { !characters && <p>Loading...</p> }
      { (characters !== null && characters.length == 0 ) && <h3>No characters with that name</h3> }
      { characters !== null && characters.map(ch => <LotrCard key={ch._id} id={ch._id} name={ch.name.toLocaleUpperCase()} race={ch.race} wikiUrl={ch.wikiUrl} clickAction={onShow}/>) }
      { showModal && createPortal(<ModalContent charId={showCharId} onClose={() => setShowModal(false)}/> , document.body) }
  </div>
  );
}

export default Cards;