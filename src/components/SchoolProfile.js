import React, { Component } from 'react';
import { connect } from 'react-redux';

class SchoolProfile extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.defineSchool()
  }
  
  defineSchool() {
    this.props.state == null ? 
      (console.log("state is unrendered"))
    : (
      this.setState(this.props.state)
    )
  }

  render() {
    console.log(this.state);
    return (
      null
      )
    }
}

const mapStateToProps = function(state) {
  return {
    state: state[0]
  }
}

export default connect(mapStateToProps)(SchoolProfile);