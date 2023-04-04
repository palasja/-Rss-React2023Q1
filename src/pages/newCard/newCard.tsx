import React, { useState } from 'react';
import Header from '../../components/header';
import { Item } from '../../types/item';
import Card from '../../components/card';
import './newCard.css';
import NewCardForm from '../../components/newCardForm';

const NewCard = () => {
  const [cards, setCards] = useState<Item[]>([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <main className="main-new-card">
        <NewCardForm
          newCardId={cards.length + 1}
          saveCard={(i: Item) => setCards([...cards, i])}
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
