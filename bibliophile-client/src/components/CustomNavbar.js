import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default class CustomNavbar extends Component {
  render(){
    return (
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
     </ul>
    );
  }
}
