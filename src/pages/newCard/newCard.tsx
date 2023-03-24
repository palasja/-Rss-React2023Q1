import React, { createRef } from 'react';
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

type NewCardProp = object;
type NewCardState = {
  cards: Item[],
  file: []
}

class NewCard extends Component<NewCardProp, NewCardState> {
  maxRating = 5;
  refCardName = createRef<HTMLInputElement>();
  refCardImage = createRef<HTMLInputElement>();
  refCardRating = createRef<HTMLSelectElement>();
  refCardWeight = createRef<HTMLInputElement>();
  refCardCost = createRef<HTMLInputElement>();
  refCardCalories = createRef<HTMLInputElement>();
  refCardStartSellDate = createRef<HTMLInputElement>();
  refsTagArr = Object.values(Tags).map(() => createRef<HTMLInputElement>());
  refsTypeArr = Object.values(TypeFood).map(() => createRef<HTMLInputElement>());
  constructor(props) {
    super(props);
    this.state = { cards: [], file:[] }
    
  }
  getEnumValues<T>(arr: string[] | T[]): string[] {
    const enumValues = arr.slice(0, arr.length / 2);
    return enumValues.map((val) => `${val}`);
  }
  getRatingValues() {
    return [...Array(this.maxRating)].map((v, i) => `${i + 1}`);
  }
  _onChange = function(){
    // Assuming only image
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
  
     reader.onloadend = function (e) {
        this.setState({ 
            imgSrc: [reader.result]
        })
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files
  }
  render() {
    return (
      <>
        <Header />
        <main className="main-new-card">
          <form className='main-new-card__form'
            onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              let tags:Tags[] = this.refsTagArr.filter((t) => t.current?.checked).map((t) => t.current?.name ? Tags[t.current?.name] : Tags.delivery);
              let type = this.refsTypeArr.find((t) => t.current?.checked);
              let newItem:Item = {
                id: this.state.cards.length + 1,
                type: type?.current?.defaultValue ? TypeFood[type?.current?.defaultValue] : TypeFood.drink,
                name: this.refCardName.current?.value ? this.refCardName.current?.value : '',
                cost: this.refCardCost.current?.value ? Number(this.refCardCost.current?.value) : 0,
                countPerWeek: 0,
                rating: this.refCardRating.current?.value ? Number(this.refCardRating.current?.value) : 0,
                calories: this.refCardCalories.current?.value ? Number(this.refCardCalories.current?.value) : 0,
                img: this.refCardImage.current?.value ? this.refCardImage.current?.value : '',
                weght: this.refCardWeight.current?.value ? Number(this.refCardWeight.current?.value) : 0,
                tags: tags,
                startSell: Date.parse(this.refCardStartSellDate.current?.value ? this.refCardStartSellDate.current?.value : '') as unknown as Date ,
              }
              this.setState({ cards: [...this.state.cards, newItem]})
              console.log(newItem);
            }}
          >
            <InputField labelProp="Name" type="text" refProp={this.refCardName} />
            <InputField labelProp="Image" type="file" refProp={this.refCardImage} />
            <InputField labelProp="Cost" type="numbber" refProp={this.refCardCost} />
            <InputField labelProp="Start Sell" type="date" refProp={this.refCardStartSellDate} />
            <SelectField
              labelProp="Start rating"
              refProp={this.refCardRating}
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
            <InputField labelProp="Weight" type="number" refProp={this.refCardWeight} />
            <InputField labelProp="Calories" type="number" refProp={this.refCardCalories} />
            <button type="submit">Sent</button>
          </form>
          <section className='main-new-card__cards'>
            {this.state.cards.map((c, i) => <Card item={c} key={i} />)}
          </section>
        </main>
      </>
    );
  }
}

export default NewCard;
