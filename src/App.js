import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { getDataThunk } from './store';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ListSchools from './components/ListSchools';
import SchoolProfile from './components/SchoolProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/school-list' component={ListSchools} />
          <Route path='/school-list/:id' component={SchoolProfile} />
        </Switch>
      </Router>
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

export default connect(mapState, mapDispatch)(App);
