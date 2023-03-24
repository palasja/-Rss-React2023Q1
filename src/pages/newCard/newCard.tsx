import React, { createRef, FormEvent, FormEventHandler } from 'react';
import { Component } from 'react';
import Header from '../../components/header';
import {
  CheckboxField,
  InputField,
  SelectField,
  RadioButtonField,
} from '../../components/formComponents';
import { Item, Tags, TypeFood } from '../../types/item';
import Card from '../../components/card'
import './newCard.css';
import ErrorMessage from '../../components/formComponents/errorMessge';
import NewCardForm from '../../components/newCardForm';

type NewCardProp = object;
type NewCardState = {
  cards: Item[]
}

class NewCard extends Component<NewCardProp, NewCardState> {
  
  constructor(props) {
    super(props);
    this.state = { cards: [] }
    
  }
 
  render() {
    return (
      <>
        <Header />
        <main className="main-new-card">
          <NewCardForm newCardId={this.state.cards.length + 1} saveCard={(i:Item) => this.setState({cards: [...this.state.cards, i]})}/>
          <section className='main-new-card__cards'>
            {this.state.cards.map((c, i) => <Card item={c} key={i} />)}
          </section>
        </main>
      </>
    );
  }
}

export default NewCard;
