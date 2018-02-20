import { combineReducers } from 'redux';
import { REQUEST_RESULTS, RECEIVE_RESULTS, SET_SEARCH_TERM } from './actions';


function results(state = {isFetching: false, facets: {}, data: {}, links: {}}, action) {
  switch (action.type) {
    case REQUEST_RESULTS:
      return {...state, isFetching: true};
    case RECEIVE_RESULTS:
      return {...state, isFetching: false, facets: action.facets, data: action.data, links: action.links};
    default:
      return state;
  }
}

function input(state = {searchTerm: ''}, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {...state, searchTerm: action.searchTerm};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  results,
  input,
});

export default rootReducer;
