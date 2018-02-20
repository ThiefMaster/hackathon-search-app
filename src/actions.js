import _ from 'lodash';

export const REQUEST_FACETS = 'REQUEST_FACETS';
export const RECEIVE_FACETS = 'RECEIVE_FACETS';

export function requestFacets() {
  return {
    type: REQUEST_FACETS,
  };
}

export function fetchFacetsIfNeeded() {
  return (dispatch, getState) => {
    if (_.isEmpty(getState().facets.items)) {
      return dispatch(fetchFacets());
    }
  };
}

function fetchFacets() {
  return dispatch => {
    dispatch(requestFacets());
    return fetch('https://zenodo.org/api/records/?size=0')
      .then(response => response.json())
      .then(json => dispatch(receiveFacets(json)));
  };
}

function receiveFacets(json) {
  const facets = _.fromPairs(Object.entries(json.aggregations).map(([key, data]) => {
    return [key, data.buckets.map(_.iteratee('key'))];
  }));
  return {
    type: RECEIVE_FACETS,
    facets: facets,
  };
}
