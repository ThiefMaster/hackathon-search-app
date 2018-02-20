import React from 'react';


const ResultSort = ({sortingOptions, sortValue, sortDirection}) => {
  return (
    <div>
      <p>Sort by:</p>
      <select value={sortValue}>
        {sortingOptions.map(({value, display}) => (
          <option value={value}>{display}</option>
        ))}
      </select>
      <select value={sortDirection}>
        <option value="asc">Asc.</option>
        <option value="desc">Desc.</option>
      </select>
    </div>
  );
};

export default ResultSort;
