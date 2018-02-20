import _ from 'lodash';

export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const ENABLE_SEARCH_FACET = 'ENABLE_SEARCH_FACET';
export const DISABLE_SEARCH_FACET = 'DISABLE_SEARCH_FACET';

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

export function toggleSearchFacet(category, name, enabled) {
  return {
    type: enabled ? ENABLE_SEARCH_FACET : DISABLE_SEARCH_FACET,
    category,
    name,
  };
}

export function fetchResults() {
  return (dispatch, getState) => {
    const {input} = getState();
    const url = new URL('https://zenodo.org/api/records/');
    if (input.searchTerm) {
      url.searchParams.append('q', input.searchTerm);
    }
    Object.entries(input.searchFacets).forEach(([category, facets]) => {
      facets.forEach((facet) => {
        url.searchParams.append(category, facet);
      })
    });
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
  const facets = _.fromPairs(Object.entries(json.aggregations).map(([category, data]) => {
    return [category, data.buckets];
  }));
  return {
    type: RECEIVE_RESULTS,
    facets: facets,
    data: json.hits,
    links: json.links,
  };
}
