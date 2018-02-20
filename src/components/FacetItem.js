import _ from 'lodash';
import React from 'react';
import { toggleSearchFacet } from '../actions';

function renderEntry(dispatch, type, name, count, missing = false) {
  if (missing) {
    count = 'n/a';
  }
  return (
    <li key={name} className={missing ? 'missing' : ''}>
      <label>
        <input
          type="checkbox"
          value={name}
          checked={missing || null}
          onChange={(e) => {
            dispatch(toggleSearchFacet(type, name, e.target.checked));
          }}/>
        {name} ({count})
      </label>
    </li>
  );
}

const FacetItem = ({dispatch, type, entries, active}) => {
  let available = entries.map(_.iteratee('key'));
  let missing = active.filter(key => !available.includes(key));
  return (
    <div>
      <strong>{type}</strong>
      <ul>
        {entries.map(value => renderEntry(dispatch, type, value.key, value.doc_count))}
        {missing.map(value => renderEntry(dispatch, type, value, 0, true))}
      </ul>
    </div>

  );
};

export default FacetItem;
