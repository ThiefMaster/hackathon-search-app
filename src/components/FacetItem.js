import React from 'react';
import { toggleSearchFacet } from '../actions';

const FacetItem = ({dispatch, type, entries}) => {
  // let items = Object.entries(items).map(pair => {k})

  return (
    <div>
      <strong>{type}</strong>
      <ul>
        {entries.map((value) => (
          <li key={value.key}>
            <label>
              <input
                type="checkbox"
                value={value.key}
                onChange={(e) => {
                  dispatch(toggleSearchFacet(type, value.key, e.target.checked));
                }}/>
              {value.key}({value.doc_count})
            </label>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default FacetItem;
