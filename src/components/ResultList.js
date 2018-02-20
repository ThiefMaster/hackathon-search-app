import React from 'react'
import PropTypes from 'prop-types'
import ResultItem from './ResultItem'

const ResultList = ({ items, onItemClick }) => (
  <ul>
    {items.map((resultItem, index) => (
      <ResultItem key={index} item={resultItem}
    //   onClick={() => onItemClick(index)}
    />
    ))}
  </ul>
)

// ResultList.propTypes = {
//   resultItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   onresultItemClick: PropTypes.func.isRequired
// }

export default ResultList
