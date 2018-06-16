import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default class CustomNavbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
      <ul className="navBar">
      <li className="navBarLink">
        <NavLink
          exact to="/"
          >Home
        </NavLink>
       </li>
       <li className="navBarLink">
         <NavLink
           exact to="/about"
           >About
         </NavLink>
        </li>
        <li className="navBarLink">
          <NavLink
            exact to="/books"
            >Books
          </NavLink>
         </li>
     </ul>
    </nav>
    );
  }
}
