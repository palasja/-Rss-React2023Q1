import React, { FormEvent, useEffect, useState } from 'react';
import './search.css';
import { useSelector, useDispatch } from 'react-redux';
import { LotrPageInfo } from '../../types/lotr';
import { charactersLoad, searchValueLotr, searchValueState } from '../../lotrInfoSlice';
import store from '../../store';
import { useForm } from 'react-hook-form';
import { useGetCharactersByNameQuery, useLazyGetCharactersByNameQuery } from '../../apiSlice';

type SearchForm = {
  curSearchValue: string;
};
const Search = () => {
  const dispatch = useDispatch();
  const curSearchValue = useSelector(searchValueState);
  const [getCharacters] = useLazyGetCharactersByNameQuery();
  
  const {
    register,
    handleSubmit,
  } = useForm<SearchForm>();

  const submitAction = async (data: SearchForm) => {
    dispatch(searchValueLotr(data.curSearchValue));
    const newCharacters = await getCharacters(data.curSearchValue).unwrap();
    dispatch(charactersLoad(newCharacters));
  }
  return (
    <div className="main_search">
      <div className="wrapper">
        <img className="search-icon" />
        <form
          onSubmit={handleSubmit(submitAction)}
        >
          <input
            className="search"
            type="text"
            placeholder="Search..."
            {...register('curSearchValue', {value:curSearchValue})}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
