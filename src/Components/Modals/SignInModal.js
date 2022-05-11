import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form";
import Nav from 'react-bootstrap/Nav';

import { useState, useContext } from "react";
import { UserContext } from "../../Context/user.context";

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { passwordShown, setPasswordShown } = useContext(UserContext);

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value});
  }
  
  const handleSubmit = () => {
    setFormFields(defaultFormFields);
    setPasswordShown(false);
  }
  return (
    <>
      <Nav onClick={handleShow}>
        <span>Sign in</span>
      </Nav>

      <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form >
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
                  type= {passwordShown ? "text" : "password"}  
                  placeholder="Password" 
                  required
                  onChange={handleChange}
                  name="password"
                  value={password}
                  />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                  onClick={togglePasswordShown}
                  type="checkbox" 
                  label="Show password" 
                  />
              </Form.Group>
              
            </Form>
          </Modal.Body>

          <Form>
            <Modal.Footer>
              <Button onClick={handleSubmit} variant="dark" type="submit">
                Sign In
              </Button>
            </Modal.Footer>
          </Form>
        
      </Modal>
    </>
  );
}
export default SignInModal;