import React from 'react';


const ResultItem = ({item}) => (
  <div>
    <strong>{item.title}</strong>
    <p>{item.description}</p>
  </div>
);

export default ResultItem;
