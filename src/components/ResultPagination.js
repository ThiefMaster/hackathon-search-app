import React from 'react';

const ResultPagination = ({currentPage, resultSize, resultCount, maxPageLinks}) => {

  let pagesCount = Math.min(Math.ceil(resultCount / resultSize), maxPageLinks);
  const pageElements = Array(pagesCount).fill().map((_, i) => (
    <li className={currentPage === (i + 1) ? 'active' : ''}><a href="#">{i + 1}</a></li>
  ));

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === pagesCount;
  return (
    <ul className="ResultPagination">
      <li className={prevDisabled ? 'disabled' : ''}><a href="#">Prev</a></li>
      {pageElements}
      <li className={nextDisabled ? 'disabled' : ''}><a href="#">Next</a></li>
    </ul>
  );
};

export default ResultPagination;
