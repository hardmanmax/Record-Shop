import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';

import { useState } from "react";

import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../Utilities/firebase';

const defaultFormFields = {
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password, confirmPassword} = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (e) => {
    setFormFields(defaultFormFields);
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if ( password.length < 8) {
      alert("Passwords must be a minimum of 8 characters")
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {email});
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log('Error: ', error);
      }
    }
  }

  return (
    <>
      <Nav onClick={handleShow}>
        Sign up
      </Nav>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                required
                onChange={handleChange}
                name="email"
                value={email}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password" 
                required
                onChange={handleChange}
                name="password"
                value={password}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password" 
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="dark" onClick={handleSubmit}>
            Sign up
          </Button>

        </Modal.Footer>
        
      </Modal>
    </>
  )
}

export default SignUpModal