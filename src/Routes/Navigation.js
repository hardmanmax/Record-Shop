import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {Outlet, Link }  from 'react-router-dom'

import { ReactComponent as DragonLogo } from "../Assets/Logo.svg";


const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              <DragonLogo />
            </Navbar.Brand>
            </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Link style={{textDecoration: "none", color: 'grey'}} to="/shop">
                Shop
              </Link>
            </Nav>
            <Nav> 
              <NavDropdown title="Sign in" id="collasible-nav-dropdown">
                <NavDropdown.Item>Sign In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Sign Up</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Basket</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      </>
  )
}

export default Navigation