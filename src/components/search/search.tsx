import React from 'react';
import './search.css';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { useLazyGetCharactersByNameQuery } from '../../store/slicer/apiSlice';
import { searchValueState, searchValueLotr } from '../../store/slicer/searchSlice';

type SearchForm = {
  curSearchValue: string;
};
const Search = () => {
  const dispatch = useDispatch();
  const curSearchValue = useSelector(searchValueState);
  const [getCharacters] = useLazyGetCharactersByNameQuery();

  const { register, handleSubmit } = useForm<SearchForm>();

  const submitAction = async (data: SearchForm) => {
    dispatch(searchValueLotr(data.curSearchValue));
    await getCharacters(data.curSearchValue).unwrap();
  };
  return (
    <div className="main_search">
      <div className="wrapper">
        <img className="search-icon" />
        <form onSubmit={handleSubmit(submitAction)} data-testid="search-form">
          <input
            className="search"
            type="text"
            placeholder="Search..."
            {...register('curSearchValue', { value: curSearchValue })}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
