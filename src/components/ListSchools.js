import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListSchools extends Component {
  render () {
    if (this.props.state !== undefined) {
      return (
        <div className="container">
          <h1 className='center'>School Profiles</h1>
          <ul className='collection'>
            {this.props.state.map(school => {
              return (
                <li class="collection-item avatar">
                  <img src={school.schoolLogoUrl} alt="" class="circle"></img>
                  <span class="title">{school.name}</span>
                  <p>{school.schoolBoard}<br/>
                    {school.address}
                  </p>
                  <a href={school.id} class="waves-effect waves-light btn-small secondary-content">More Info</a>
                </li>
              )
          })}
        </ul>
      </div>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = function(state) {
  return {
    state: state[0]
  }
}

export default connect(mapStateToProps)(ListSchools);