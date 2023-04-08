import React, { useState } from 'react';
import LotrCard from '../lotrCard';
import './cards.css';
import { Character } from '../../types';
import { createPortal } from 'react-dom';
import ModalContent from '../modalContent';
import ContentLoader from 'react-content-loader';

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
      .fill(null)
      .map((val, i) => (
        <ContentLoader
          key={i}
          speed={1}
          width={300}
          height={160}
          viewBox="0 0 250   160"
          backgroundColor="#431dcd"
          foregroundColor="#0cd3ed"
          data-testid="cards_loader"
        >
          <rect x="48" y="8" rx="3" ry="3" width="300" height="30" />
          <rect x="48" y="56" rx="3" ry="3" width="300" height="30" />
        </ContentLoader>
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
