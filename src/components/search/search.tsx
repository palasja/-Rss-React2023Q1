import React, { FormEvent, useEffect, useState } from 'react';
import './search.css';

type SearchProps = {
  onChange: (newValue: string) => void;
  curSearchValue: string;
};

const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState(props.curSearchValue);
  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  }, [searchValue]);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value);
    props.onChange(e.currentTarget.value);
  };

  return (
    <div className="wrapper">
      <img className="search-icon" />
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
