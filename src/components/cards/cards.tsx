import React, { useState } from 'react';
import LotrCard from '../lotrCard';
import './cards.css';
import { Character } from '../../types';
import { createPortal } from 'react-dom';
import ModalContent from '../modalContent';
import { cardLoader } from '../../helper/loaders';

type CardProp = {
  characters: Character[] | null;
};

const Cards = (props: CardProp) => {
  const [showModal, setShowModal] = useState(false);
  const [showCharId, setshowCharId] = useState('');
  const { characters } = props;

  const onShow = (id: string) => {
    setShowModal(true);
    setshowCharId(id);
  };

  const getCardLoader = (): JSX.Element[] => {
    return Array(8)
      .fill(cardLoader)
      .map((val, i) => (
        <div key={i}>
          {val}
        </div>

      ));
  };

  return (
    <div className="main_cards">
      {!characters && getCardLoader()}
      {characters !== null && characters.length == 0 && <h3>No characters with that name</h3>}
      {characters !== null &&
        characters.map((ch) => (
          <LotrCard
            key={ch._id}
            id={ch._id}
            name={ch.name.toLocaleUpperCase()}
            race={ch.race}
            wikiUrl={ch.wikiUrl}
            clickAction={onShow}
          />
        ))}
      {showModal &&
        createPortal(
          <ModalContent charId={showCharId} onClose={() => setShowModal(false)} />,
          document.getElementsByClassName('content')[0]
        )}
    </div>
  );
};

export default Cards;
