import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchResults } from '../actions';

import ResultList from '../components/ResultList';
import ResultCount from '../components/ResultCount';
import ResultPagination from '../components/ResultPagination';
import SearchInput from '../components/SearchInput';
import ResultSort from '../components/ResultSort';
import FacetList from '../components/FacetList';


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
    dispatch(fetchResults());
  }

  render() {
    const {dispatch} = this.props;
    const {facets, data, links, isFetching} = this.props.results;
    const {searchFacets} = this.props.input;
    return (
      <div className="App">
        {isFetching && <h2>Loading...</h2>}
        <SearchInput dispatch={dispatch} isFetching={isFetching}/>
        <ResultSort sortingOptions={TEST_SORT_OPTIONS} sortValue={'bestmatch'} sortDirection={'asc'}
                    isFetching={isFetching}/>
        <ResultPagination currentPage={5} resultSize={10} resultCount={TEST_RESULT_COUNT}/>
        <ResultCount count={TEST_RESULT_COUNT}/>
        <ResultList items={TEST_RESULTS}/>
        <FacetList dispatch={dispatch} items={facets} activeFacets={searchFacets}/>
      </div>
    );
  }
}

AsyncApp.propTypes = {
  facets: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  links: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AsyncApp);
