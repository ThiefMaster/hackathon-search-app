import React from 'react';

const ResultItem = ({item}) => {
  let creatorsListItems = item.metadata.creators.map(c => (
    <li>{c.name}</li>
  ));
  let creatorsList = (
    <ul>
      {creatorsListItems}
    </ul>
  );
  return (
    <div>
      <a href={item.links.html}><strong>{item.metadata.title}</strong></a>
      <p dangerouslySetInnerHTML={{__html: item.metadata.description}}></p>
      {creatorsList}
      <hr/>
    </div>
  );
}

export default ResultItem;
