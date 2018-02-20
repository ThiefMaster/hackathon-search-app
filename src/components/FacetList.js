import React from 'react';
import FacetItem from './FacetItem';

const FacetList = ({dispatch, items, activeFacets}) => {
  let entries = Object.entries(items);
  if (entries.length) {
    return (
      <div>
        {entries.map(([type, entries]) => {
          let active = activeFacets[type] || [];
          return <FacetItem dispatch={dispatch} type={type} entries={entries} active={active}/>;
        })}
      </div>
    );
  } else {
    return (
      <div>No facets</div>
    );
  }
};

export default FacetList;
