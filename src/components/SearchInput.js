import React from 'react';
import { fetchResults, setSearchTerm } from '../actions';


let SearchInput = ({dispatch, isFetching}) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(fetchResults());
        }}
      >
        <input
          disabled={isFetching}
          onChange={e => {
            dispatch(setSearchTerm(e.target.value.trim()));
          }}/>
        <button type="submit" disabled={isFetching}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
