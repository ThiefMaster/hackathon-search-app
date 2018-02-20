import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFacetsIfNeeded } from '../actions';


class AsyncApp extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchFacetsIfNeeded());
  }

  render() {
    return (
      <div/>
    );
  }
}

AsyncApp.propTypes = {
  facets: PropTypes.object.isRequired,
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
