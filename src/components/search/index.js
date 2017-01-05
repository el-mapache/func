import React from 'react';
import Button from '../button';
import Loading from '../composables/Loading';
import falseyToNull from '../../modules/falsey-to-null';
import { updateSearchValue } from '../../actions/search';
import './search.css';

const LoadingButton = Loading(Button);

const Search = ({ isLoading, value, onSearch }) => {
  const handleSearch = event => {
    event.preventDefault();
    onSearch(falseyToNull(value));
  };

  const update = event =>
    updateSearchValue(event.target.value);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search" className="block">
          Enter the name of a pokémon!
        </label>
        <input
          type="text"
          name="search"
          value={value}
          onInput={update}/>
        <LoadingButton
          type="submit"
          className="btn inline"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Search
        </LoadingButton>
      </form>
    </div>
  );
};

export default Search;
