import React from 'react';
import {setSortingType, setSortingDirection} from '../actions'


const ResultSort = ({dispatch, sortingOptions, sortValue, sortDirection, isFetching}) => {
  return (
    <div>
      <p>Sort by:</p>
      <select value={sortValue} disabled={isFetching} onChange={(e) => {
            dispatch(setSortingType(e.target.value.trim()));
          }}>
        {sortingOptions.map(({value, display}) => (
            <option key={value} value={value}>{display}</option>
        ))}
      </select>
      <select value={sortDirection} disabled={isFetching} onChange={(e) => {
            dispatch(setSortingDirection(e.target.value.trim()));
          }}>
          <option key= "asc" value="asc">Asc.</option>
          <option key= "desc" value="desc">Desc.</option>
      </select>
    </div>
  );
};

export default ResultSort;
