import React, { useEffect, useState } from 'react';
import './home.css';
import { Character } from '../../types';
import Search from '../../components/search';
import Header from '../../components/header';
import Cards from '../../components/cards/cards';
import API from '../../helper/contsAPI';
import { getFetchData } from '../../helper/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { charactersLoad, seachValueLotr } from '../../lotrInfoSlice';
import { LotrPageInfo } from '../../types/lotr';

const Home = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: LotrPageInfo) => state.searchValue)
  const [errorResponse, setErrorResponse] = useState<string | null>(null);
  useEffect(() => {
    dispatch(charactersLoad(null))
    const getCharacters = async () => {
      try {
        const data = (await getFetchData(
          `${API.host}/character?name=/^${searchValue}/i`
        )) as Character[];
        dispatch(charactersLoad(data))
      } catch (e) {
        setErrorResponse(e.message);
      }
    };

    getCharacters();
  }, [searchValue]);

  return (
    <>
      <Header />
      <main className="main">
        <Search curSearchValue={searchValue} />
        {errorResponse ? (
          <p className="errorMessge">{errorResponse}</p>
        ) : (
          <Cards />
        )}
      </main>
    </>
  );
};

export default Home;
