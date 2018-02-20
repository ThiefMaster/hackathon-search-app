import React from 'react';
import FacetItem from './FacetItem';

const FacetList = ({dispatch, items}) => {
  let entries = Object.entries(items);
  if (entries.length) {
    return (
      <div>
        {entries.map(pair => (
          <FacetItem dispatch={dispatch} type={pair[0]} entries={pair[1]}/>
        ))}
      </div>
    );
  } else {
    return (
      <div>No facets</div>
    );
  }
};

export default FacetList;
