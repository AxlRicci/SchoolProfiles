import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListSchools from './components/ListSchools'
import { connect } from 'react-redux';
import { getDataThunk } from './store';

class App extends Component {
  render() {
    return (
      <ListSchools />
    )
  }
}

const mapState = redux => ({
  redux: redux[0]
})

const mapDispatch = dispatch => {
  dispatch(getDataThunk())
  return {
  }
}

export default connect(mapState, mapDispatch) (App);
