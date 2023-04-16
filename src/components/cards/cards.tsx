import React, { useState } from 'react';
import LotrCard from '../lotrCard';
import './cards.css';
import { Character } from '../../types';
import { createPortal } from 'react-dom';
import ModalContent from '../modalContent';
import { cardLoader } from '../../helper/loaders';
import { useSelector } from 'react-redux';
import { LotrPageInfo } from '../../types/lotr';
import { useGetCharactersByNameQuery } from '../../apiSlice';

const Cards = () => {
  const { data = [], isLoading, isFetching } = useGetCharactersByNameQuery('ar')
  const [showModal, setShowModal] = useState(false);
  const [showCharId, setshowCharId] = useState('');

  const onShow = (id: string) => {
    setShowModal(true);
    setshowCharId(id);
  };

  const getCardLoader = (): JSX.Element[] => {
    return Array(8)
      .fill(cardLoader)
      .map((val, i) => <div key={i}>{val}</div>);
  };

  return (
    <div className="main_cards">
      {isLoading && getCardLoader()}
      {data && data.length == 0 && <h3>No characters with that name</h3>}
      {data &&
        data.map((ch) => (
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
