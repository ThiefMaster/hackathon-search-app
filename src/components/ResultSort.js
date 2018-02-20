import React from 'react'
import PropTypes from 'prop-types'

const ResultSort = ({ sortingOptions, sortValue, sortDirection }) => {
  return (
    <div>
        <select>
        {TEST_SORT_OPTIONS.map(({value, display}) => (
            <option value={value}>{display}</option>
        ))}
        </select>
        <select>
            <option value="asc">Asc.</option>
            <option value="desc">Desc.</option>
        </select>
    </div>
  )
}

export default ResultSort
