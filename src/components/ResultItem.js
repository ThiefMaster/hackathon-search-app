import React from 'react'
import PropTypes from 'prop-types'

const ResultItem = ({ item }) => (
    <div>
        <strong>{item.title}</strong>
        <p>{item.description}</p>
    </div>
)

// ResultItem.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default ResultItem
