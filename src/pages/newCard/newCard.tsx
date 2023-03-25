import React, { createRef, FormEvent, FormEventHandler } from 'react';
import { Component } from 'react';
import Header from '../../components/header';
import { Item, Tags, TypeFood } from '../../types/item';
import Card from '../../components/card'
import './newCard.css';
import NewCardForm from '../../components/newCardForm';

type NewCardProp = object;
type NewCardState = {
  cards: Item[],
  showModal: boolean
}

class NewCard extends Component<NewCardProp, NewCardState> {
  constructor(props) {
    super(props);
    this.state = { cards: [], showModal: false }
  }
  
  toggleModal(){
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <>
        <Header />
        <main className="main-new-card">
          <NewCardForm newCardId={this.state.cards.length + 1} saveCard={(i:Item) => this.setState({cards: [...this.state.cards, i]})} confirmAction={() => this.toggleModal()} />
          <section className='main-new-card__cards'>
            {this.state.cards.map((c, i) => <Card item={c} key={i} />)}
          </section>
          {this.state.showModal && <section className='main-new-card__modal'>
            <h2>Card was added</h2>
          </section>}
        </main>
      </>
    );
  }
}

export default NewCard;
