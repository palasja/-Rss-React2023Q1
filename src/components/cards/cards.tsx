import React, { useState } from 'react';
import LotrCard from '../lotrCard';
import './cards.css';
import { createPortal } from 'react-dom';
import ModalContent from '../modalContent';
import { cardLoader } from '../../helper/loaders';
import { useSelector } from 'react-redux';
import { useGetCharactersByNameQuery } from '../../apiSlice';
import { searchValueState } from '../../SearchSlice';

const Cards = () => {
  const curSearchValue = useSelector(searchValueState);
  const { data = [], isLoading, isError } = useGetCharactersByNameQuery(curSearchValue);

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
    <>
      {isError ? (
        <p className="errorMessge">
          Too Many Requests. That API requirement, try reload page later
        </p>
      ) : (
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
      )}
    </>
  );
};

export default Cards;
