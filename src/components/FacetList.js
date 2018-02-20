import React from 'react'
import PropTypes from 'prop-types'
import FacetItem from './FacetItem'

const FacetList = ({ items }) => {
  console.log(items);
  let entries = Object.entries(items);
  if (entries.length) {
    return (
      <div>
      {entries.map(pair => (
        <FacetItem type={pair[0]} entries={pair[1]}/>
      ))}
      </div>
    )
  } else {
    return (
      <div>No facets</div>
    )
  }

}

export default FacetList
