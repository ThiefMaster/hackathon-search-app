import React from 'react';
import ResultItem from './ResultItem';


const ResultList = ({items, onItemClick}) => (
  <ul>
    {items.map((resultItem, index) => (
      <ResultItem key={index} item={resultItem}
        //   onClick={() => onItemClick(index)}
      />
    ))}
  </ul>
);

export default ResultList;
