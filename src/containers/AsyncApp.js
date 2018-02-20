import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFacetsIfNeeded } from '../actions';

import ResultList from '../components/ResultList';
import ResultCount from '../components/ResultCount';
import ResultPagination from '../components/ResultPagination';
import SearchInput from '../components/SearchInput';
import ResultSort from '../components/ResultSort';


const TEST_RESULTS = [
  {title: 'Some title 1', description: 'Some description 1'},
  {title: 'Some title 2', description: 'Some description 2'},
  {title: 'Some title 3', description: 'Some description 3'},
  {title: 'Some title 4', description: 'Some description 4'},
  {title: 'Some title 5', description: 'Some description 5'},
];

const TEST_RESULT_COUNT = 95;

const TEST_SORT_OPTIONS = [
  {value: 'mostrecent', display: 'Most recent'},
  {value: 'bestmatch', display: 'Best match'},
  {value: 'publication_date', display: 'Publication date'},
  {value: 'title', display: 'Title'},
];


class AsyncApp extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchFacetsIfNeeded());
  }

  render() {
    const {dispatch, facets, isFetching} = this.props;
    return (
      <div className="App">
        {isFetching && <h2>Loading...</h2>}
        <SearchInput dispatch={dispatch} isFetching={isFetching}/>
        <ResultSort sortingOptions={TEST_SORT_OPTIONS} sortValue={'bestmatch'} sortDirection={'asc'}
                    isFetching={isFetching}/>
        <ResultPagination currentPage={5} resultSize={10} resultCount={TEST_RESULT_COUNT}/>
        <ResultCount count={TEST_RESULT_COUNT}/>
        <ResultList items={TEST_RESULTS}/>
      </div>
    );
  }
}

AsyncApp.propTypes = {
  facets: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const {
    isFetching,
    items: facets,
  } = state.facets || {
    isFetching: true,
    items: {},
  };

  return {
    facets,
    isFetching,
  };
}

export default connect(mapStateToProps)(AsyncApp);
