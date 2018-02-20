import React from 'react'
import PropTypes from 'prop-types'

const FacetItem = ({ type, entries }) => {
  // let items = Object.entries(items).map(pair => {k})

  return (
    <div>
      <strong>{type}</strong>
      <ul>
      {entries.map((value) => (
          <li key={value.key}>
            <label>
              <input type="checkbox" value={value.key}/>
              {value.key}({value.doc_count})
            </label>
          </li>
      ))}
      </ul>
    </div>

  )
}

export default FacetItem
