import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  REQUEST_RESULTS, RECEIVE_RESULTS, SET_SEARCH_TERM, ENABLE_SEARCH_FACET, DISABLE_SEARCH_FACET,
} from './actions';


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

function input(state = {searchTerm: '', searchFacets: {}}, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {...state, searchTerm: action.searchTerm};
    case ENABLE_SEARCH_FACET: {
      const {category, name} = action;
      const searchFacets = _.cloneDeep(state.searchFacets);
      searchFacets[category] = searchFacets[category] || [];
      searchFacets[category].push(name);
      return {...state, searchFacets};
    }
    case DISABLE_SEARCH_FACET: {
      const {category, name} = action;
      const searchFacets = _.cloneDeep(state.searchFacets);
      if (category in searchFacets) {
        _.pull(searchFacets[category], name);
        if (_.isEmpty(searchFacets[category])) {
          delete searchFacets[category];
        }
      }
      return {...state, searchFacets};
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  results,
  input,
});

export default rootReducer;
