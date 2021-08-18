import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <ul className="header">
          <li>
            <NavLink style={{'border-radius':'5px 0px 0px 5px'}} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/table">Table</NavLink>
          </li>
          {/* <li>
            <NavLink to="/submit">Submit</NavLink>
          </li> */}
        </ul>
      </div>
    );
}

export default Navbar
