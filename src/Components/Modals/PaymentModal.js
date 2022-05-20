import { useState } from "react";
import {Button, Modal} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentModal = () => {


  const navigate = useNavigate();

  const goToConfirmationHandler = () => { 
    handleClose();
    navigate('/confirmation');

}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="text-center" variant="dark" onClick={handleShow}>
        Click here to pay
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Card Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>(Feature not ready yet!)</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={goToConfirmationHandler}>Pay Now</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModal;