import _ from 'lodash';

export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';

export function requestResults() {
  return {
    type: REQUEST_RESULTS,
  };
}

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    searchTerm,
  };
}

export function fetchResults() {
  return (dispatch, getState) => {
    const {facets, input} = getState();
    const url = new URL('https://zenodo.org/api/records/');
    if (input.searchTerm) {
      url.searchParams.append('q', input.searchTerm);
    }
    dispatch(requestResults());
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveResults(json)));
      // .then(json => setTimeout(() => {
      //   dispatch(receiveResults(json));
      // }, 2500));
  };
}

function receiveResults(json) {
  const facets = _.fromPairs(Object.entries(json.aggregations).map(([key, data]) => {
    return [key, data.buckets];
  }));
  return {
    type: RECEIVE_RESULTS,
    facets: facets,
    data: json.hits,
    links: json.links,
  };
}
