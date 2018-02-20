import React from 'react'
import PropTypes from 'prop-types'

// pagesCount = total_results / size
// currentPage

const ResultPagination = ({ currentPage, resultSize, resultCount, maxPageLinks }) => {

  // currentPage: 3
  // resultCount: 55
  // resultSize: 10
  // pagesCount: 6
  let pagesCount = Math.ceil(resultCount / resultSize);

  const pageElements = Array(pagesCount).fill().map((_, i) => (
    <li className={currentPage === (i + 1) ? "active" : ""}><a href="#">{i + 1}</a></li>
  ));

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === pagesCount;
  return (
    <ul className="ResultPagination">
      <li className={prevDisabled ? "disabled": ""}><a href="#">Prev</a></li>
      {pageElements}
      <li className={nextDisabled ? "disabled": ""}><a href="#">Next</a></li>
    </ul>
  )
}

export default ResultPagination
