import React, { useState } from 'react';
import { ReactNode } from 'react';
import './home.css';
import items from '../../assets/items/items';
import Card from '../../components/card/card';
import { Item } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';

const Home = () => {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const filterItems = (): Item[] => {
    return searchValue === null || searchValue.length === 0
      ? items
      : items.filter((item) => new RegExp(searchValue, 'i').test(item.name));
  };

  return (
    <>
      <Header />
      <main className="main">
        <div className="main_search">
          <Search
            onChange={(newName: string) => setSearchValue(newName)}
            curSearchValue={searchValue}
          />
        </div>
        <div className="main_cards">
          {filterItems().map(
            (item: Item): ReactNode => (
              <Card key={item.id} item={item} />
            )
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
