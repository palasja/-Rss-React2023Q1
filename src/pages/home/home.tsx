import React, { useEffect, useState } from 'react';
import './home.css';
import { Character } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import Cards from '../../components/cards/cards';
import API from '../../helper/contsAPI';
import { getFetchData } from '../../helper/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { LotrPageInfo } from '../../types/lotr';
import { useGetCharactersByNameQuery } from '../../apiSlice';

const Home = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: LotrPageInfo) => state.searchValue)
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="main">
        <Search/>
        {errorResponse ? (
          <p className="errorMessge">{errorResponse}</p>
        ) : (
          <Cards/>
        )}
      </main>
    </>
  );
};

export default Home;
