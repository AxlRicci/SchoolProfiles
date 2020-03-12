import React, { Component } from 'react';
import { connect } from 'react-redux';

class SchoolProfile extends Component {
  render() {
    return (
      null
    );
  }
}

const mapStateToProps = function(state) {
  return {
    state: state[0]
  }
}

export default connect(mapStateToProps)(SchoolProfile);