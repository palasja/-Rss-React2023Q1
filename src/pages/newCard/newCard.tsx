import React, { useState } from 'react';
import Header from '../../components/header';
import Card from '../../components/card';
import './newCard.css';
import NewCardForm from '../../components/newCardForm';
import { useSelector } from 'react-redux';
import { cardsState } from '../../store/slicer/newCardSlicer';
const NewCard = () => {
  const cards = useSelector(cardsState);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <main className="main-new-card">
        <NewCardForm
          newCardId={cards.length + 1}
          confirmAction={(show: boolean) => setShowModal(show)}
        />
        <section className="main-new-card__cards">
          {cards.map((c, i) => (
            <Card item={c} key={i} />
          ))}
        </section>
        {showModal && (
          <section className="main-new-card__modal">
            <h2>Card was added</h2>
          </section>
        )}
      </main>
    </>
  );
};

export default NewCard;
