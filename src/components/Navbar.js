import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul className="right">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/school-list">Schools</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default withRouter(Navbar);