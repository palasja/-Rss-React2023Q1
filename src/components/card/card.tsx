import React from 'react';
import { Component, ReactNode } from 'react';
import { Item } from '../../types';
import './card.css';

type CardProps = {
  item: Item;
  key: number;
};

class Card extends Component<CardProps> {
  render(): ReactNode {
    const item = this.props.item;

    return (
      <div className="card">
        <figure className="card_image">
          <img
            className="card_image__image"
            src={new URL(`../../assets/img/${item.img}`, import.meta.url).href}
            alt={item.name}
          />
          <figcaption>{item.name}</figcaption>
        </figure>
        <div className="card_info">
          <div className="card_info__item">
            <p>Rating: {item.rating} / 5 </p>
            <p>Per Week: {item.countPerWeek}</p>
          </div>
          <div className="card_info__order">
            <p>
              Weight: {item.weght} {item.type === 'drink' ? 'ml' : 'gm'}
            </p>
            <p>Calories: {item.countPerWeek} cal</p>
          </div>
          <p className="card_info__cost">{item.cost} $</p>
        </div>
      </div>
    );
  }
}

export default Card;
