import React, { FormEvent, useState } from 'react';
import './search.css';
import { useSelector, useDispatch } from 'react-redux';
import { LotrPageInfo } from '../../types/lotr';
import { seachValueLotr } from '../../lotrInfoSlice';

type SearchProps = {
  curSearchValue: string;
};
const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState(props.curSearchValue);
  const dispatch = useDispatch();
  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div className="main_search">
      <div className="wrapper">
        <img className="search-icon" />
        <form
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            dispatch(seachValueLotr(searchValue))
          }}
        >
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
