import React, { Component } from 'react';
import './App.css';
import ResultList from './components/ResultList';
import ResultCount from './components/ResultCount';
import ResultPagination from './components/ResultPagination';
import SearchInput from './components/SearchInput';

const TEST_RESULTS = [
  {title: "Some title 1", description: "Some description 1"},
  {title: "Some title 2", description: "Some description 2"},
  {title: "Some title 3", description: "Some description 3"},
  {title: "Some title 4", description: "Some description 4"},
  {title: "Some title 5", description: "Some description 5"},
]

const TEST_RESULT_COUNT = 95

const TEST_SORT_OPTIONS = [
  {value: "mostrecent", display: "Most recent"},
  {value: "bestmatch", display: "Best match"},
  {value: "publication_date", display: "Publication date"},
  {value: "title", display: "Title"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchInput />
        <ResultPagination currentPage={5} resultSize={10} resultCount={TEST_RESULT_COUNT} />
        <ResultCount count={TEST_RESULT_COUNT} />
        <ResultList items={TEST_RESULTS} />
      </div>
    );
  }
}

export default App;
