import React, { createRef } from 'react';
import { Component } from 'react';
import Header from '../../components/header';
import {
  CheckboxField,
  InputField,
  SelectField,
  RadioButtonField,
} from '../../components/formComponents';
import { Tags, TypeFood } from '../../types/item';
import './newCard.css';

class NewCard extends Component {
  maxRating = 5;
  typeF = '';
  cardName = createRef<HTMLInputElement>();
  cardImage = createRef<HTMLInputElement>();
  cardRating = createRef<HTMLSelectElement>();
  cardStartSellDate = createRef<HTMLInputElement>();
  refsTagArr = Object.values(Tags).map(() => createRef<HTMLInputElement>());
  refsTypeArr = Object.values(TypeFood).map(() => createRef<HTMLInputElement>());
  getEnumValues<T>(arr: string[] | T[]): string[] {
    const enumValues = arr.slice(0, arr.length / 2);
    return enumValues.map((val) => `${val}`);
  }
  getRatingValues() {
    return [...Array(this.maxRating)].map((v, i) => `${i + 1}`);
  }
  setType(val: string) {
    this.typeF = val;
  }
  render() {
    return (
      <>
        <Header />
        <main className="main-new-card">
          <form
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              console.log(
                this.refsTagArr.filter((t) => t.current?.checked).map((t) => t.current?.name)
              );
            }}
          >
            <InputField labelProp="Name" type="text" refProp={this.cardName} />
            <InputField labelProp="Image" type="file" refProp={this.cardImage} />
            <InputField labelProp="Start Sell" type="date" refProp={this.cardStartSellDate} />
            <SelectField
              labelProp="Start rating"
              refProp={this.cardRating}
              values={this.getRatingValues()}
            />
            <CheckboxField
              legendProp="Tags"
              values={this.getEnumValues(Object.values(Tags))}
              refArr={this.refsTagArr}
            />
            <RadioButtonField
              legendProp="Type"
              values={this.getEnumValues(Object.values(TypeFood))}
              refArr={this.refsTypeArr}
            />
            <button type="submit">Sent</button>
          </form>
        </main>
      </>
    );
  }
}

export default NewCard;
