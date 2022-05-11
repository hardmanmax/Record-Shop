import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {Outlet, Link }  from 'react-router-dom'

import { ReactComponent as DragonLogo } from "../Assets/Logo.svg";

import SignInModal from '../Components/Modals/SignInModal';

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
                <NavDropdown.Item>
                  <SignInModal />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Sign Up</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Basket (0)</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      </>
  )
}

export default Navigation