import React, { FormEvent, useEffect, useState } from 'react';
import './search.css';
import { useForm } from 'react-hook-form';

type SearchProps = {
  onSubmit: (newValue: string) => void;
  curSearchValue: string;
};
const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState(props.curSearchValue);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <div className="main_search">
    <div className="wrapper">
      <img className="search-icon" />
      <form  onSubmit={(e: FormEvent) => {e.preventDefault(); props.onSubmit(searchValue)}}>
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
