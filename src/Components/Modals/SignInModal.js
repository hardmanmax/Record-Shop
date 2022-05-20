import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form";
import { Nav } from "react-bootstrap";

import { useState, useContext } from "react";

import { UserContext } from "../../Context/user.context";
import { signInAuthUserWithEmailAndPassword } from "../../Utilities/firebase";

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

  const { 
    passwordShown, 
    setPasswordShown,
    currentUser
  } = useContext(UserContext);

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value});
  }
  
  const handleSubmit =  async (e) => {
    setPasswordShown(false);
    e.preventDefault();
    
    if (!email || !password ) {
      alert('Please enter email and password to sign in.')
    }
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      handleClose();
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert('Incorrect Password');
          setFormFields(defaultFormFields);
        break;
        case "auth/user-not-found":
          alert('No account exists for those details. Sign up to continue.');
          setFormFields(defaultFormFields);
          handleClose();
        break;
        default:
      }
    }
  }
  return (
    <>
      <Nav variant="dark" onClick={handleShow}>
      {
        currentUser ? 
        <p>{`${currentUser.email}`}</p>
        : <span>Sign in</span>
      }
      </Nav>

      <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit}>
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