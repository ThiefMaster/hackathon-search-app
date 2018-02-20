import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchResults } from '../actions';
import _ from 'lodash'

import ResultList from '../components/ResultList';
import ResultCount from '../components/ResultCount';
import ResultPagination from '../components/ResultPagination';
import SearchInput from '../components/SearchInput';
import ResultSort from '../components/ResultSort';
import FacetList from '../components/FacetList';


const RESULT_SIZE = 20
const MAX_PAGINATION_LINKS = 10

const SORT_OPTIONS = [
  {value: 'mostrecent', display: 'Most recent'},
  {value: 'bestmatch', display: 'Best match'},
  {value: 'publication_date', display: 'Publication date'},
  {value: 'title', display: 'Title'},
];

const DEFAULT_SORT_OPTIONS = {
  sortType: 'bestmatch',
  sortDirection: 'desc',
}


class AsyncApp extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchResults());
  }

  render() {
    const {dispatch} = this.props;
    const {facets, data, links, isFetching} = this.props.results;
    const {searchFacets, searchSortType, searchSortDirection} = this.props.input;

    let hasResults = !_.isEmpty(data)
    const count = hasResults ? data.total : 0;
    const items = hasResults ? data.hits : [];

    return (
      <div className="App">
        {isFetching && <h2>Loading...</h2>}
        <div className="Header">
          <h1>JS Hackathon Search App</h1>
          <div className="SearchBar">
            <SearchInput dispatch={dispatch} isFetching={isFetching}/>
          </div>
        </div>
        <div className="Content">
          <div className="Facets">
            <h2>Facets</h2>
            <FacetList dispatch={dispatch} items={facets} activeFacets={searchFacets} />
          </div>
          <div className="ResultsContent">
            <div className="ResultsHeader">
              <ResultCount count={count}/>
              <ResultPagination currentPage={1} resultSize={RESULT_SIZE} resultCount={count} maxPageLinks={MAX_PAGINATION_LINKS}/>
              <ResultSort dispatch={dispatch} sortingOptions={SORT_OPTIONS} sortValue={searchSortType} sortDirection={searchSortDirection} />
            </div>
            <div className="Results">
              <ResultList items={items}/>
            </div>
          </div>
        </div>
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
