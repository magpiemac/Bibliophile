import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom';

export default class CustomNavbar extends Component {
  render(){
    return (
          <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Bibliophile</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
                exact to="/"
                >Home
            </NavItem>
            <NavItem
               exact to="/about"
               >About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
