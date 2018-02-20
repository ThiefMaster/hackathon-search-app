import React from 'react';


const ResultSort = ({sortingOptions, sortValue, sortDirection, isFetching}) => {
  return (
    <div>
      <p>Sort by:</p>
      <select value={sortValue} disabled={isFetching}>
        {sortingOptions.map(({value, display}) => (
          <option value={value}>{display}</option>
        ))}
      </select>
      <select value={sortDirection} disabled={isFetching}>
        <option value="asc">Asc.</option>
        <option value="desc">Desc.</option>
      </select>
    </div>
  );
};

export default ResultSort;
