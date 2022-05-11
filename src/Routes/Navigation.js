import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {Outlet, Link }  from 'react-router-dom'

import { ReactComponent as DragonLogo } from "../Assets/Logo.svg";

import { useContext } from 'react';

import { UserContext } from '../Context/user.context';

import { signOutUser } from "../Utilities/firebase";

import SignInModal from '../Components/Modals/SignInModal';
import SignUpModal from '../Components/Modals/SignUpModal';


const Navigation = () => {

  const { currentUser } = useContext(UserContext);

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
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link style={{textDecoration: "none", color: 'grey'}} to="/shop">
                Shop
              </Link>
            </Nav>
            <>
              {
                currentUser ? ( 
                  <Nav>
                    <NavDropdown title={`${currentUser.email}`}>
                      <NavDropdown.Item onClick={signOutUser}>Sign out</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ):(
                  <Nav>

                    <NavDropdown title="Sign in" id="collasible-nav-dropdown">

                      <NavDropdown.Item>
                        <SignInModal />
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <SignUpModal />
                      </NavDropdown.Item>

                    </NavDropdown>

                  </Nav>
                )
              }
            </>


            <Nav>Basket (0)</Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      </>
  )
}

export default Navigation