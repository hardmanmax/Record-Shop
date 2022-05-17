import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import { BasketContext } from "../../Context/basket.context";

const BasketModal = () => {

  const { basketCount } = useContext(BasketContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Basket
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Basket</Modal.Title>
        </Modal.Header>
        <>{basketCount}</>
      </Modal>
    </>
  )
};
export default BasketModal;