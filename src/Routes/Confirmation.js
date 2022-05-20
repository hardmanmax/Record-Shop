import React from 'react'
import { Container, Modal, Button, Navbar } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { ReactComponent as DragonLogo } from "../Assets/Logo.svg";
import { useContext } from 'react'
import { BasketContext } from '../Context/basket.context';

const Confirmation = () => {

  const { clearBasket } = useContext(BasketContext)

  const navigate = useNavigate()

  const goHomeHandler = () => {
    navigate('/');
    clearBasket();
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white", 
          color: "black",
          opacity: 0.92,
          zIndex: 1
        }} 
        collapseOnSelect 
        expand="lg" 
        sticky="top"
        >
          <Link to='/'>
            <Navbar.Brand>
              <DragonLogo />
            </Navbar.Brand>
          </Link>
      </Navbar>

      <Container className='text-center'>
        <Modal.Dialog>
          <Modal.Header className="mx-auto">
            <Modal.Title>Thanks for your order!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>We hope to see you again soon.</p>
            <DragonLogo/>

          </Modal.Body>

          <Modal.Footer className='text-center'>
            <Button className="mx-auto"onClick={goHomeHandler} variant="dark">Return to Shop</Button>
          </Modal.Footer>
        </Modal.Dialog>


      </Container>
    </>
  )
}

export default Confirmation