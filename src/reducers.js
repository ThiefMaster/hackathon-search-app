import { combineReducers } from 'redux';
import { REQUEST_FACETS, RECEIVE_FACETS } from './actions';


function facets(state = {isFetching: false, items: {}}, action) {
  switch (action.type) {
    case REQUEST_FACETS:
      return {...state, isFetching: true};
    case RECEIVE_FACETS:
      return {...state, isFetching: false, items: action.facets};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  facets,
});

export default rootReducer;
