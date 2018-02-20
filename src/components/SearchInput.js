import React from 'react';


let SearchInput = ({dispatch, isFetching}) => {
  let searchText;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!searchText.value.trim()) {
            return;
          }
          // dispatch(searchInput(searchText.value))
          console.log(`Submitted searched for: ${searchText.value}`);
          searchText.value = '';
        }}
      >
        <input disabled={isFetching} ref={node => {
          searchText = node;
        }}/>
        <button type="submit" disabled={isFetching}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
