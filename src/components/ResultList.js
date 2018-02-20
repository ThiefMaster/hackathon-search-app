import React from 'react';
import ResultItem from './ResultItem';
import _ from 'lodash';


const ResultList = ({items}) => {
  if (!_.isEmpty(items)){
    return (<ul>
      {items.map((resultItem, index) => (
        <ResultItem key={index} item={resultItem} />
      ))}
    </ul>)
  }
  return (
    <div>No results</div>
  )
}

export default ResultList;
