import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import { BasketContext } from "../../Context/basket.context";
import BasketItem from "../BasketItem/BasketItem";

const BasketModal = () => {

  const { basketCount, basketItems } = useContext(BasketContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Basket ({basketCount})
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Basket</Modal.Title>
        </Modal.Header>

        <>
          <Modal.Body>
            <Row>
              <Col></Col>
              <Col>Title</Col>
              <Col>Quantity</Col>
              <Col>Price</Col>
            </Row>

            {basketItems.map((item) => (
              <BasketItem
                key={item.id}
                basketItem={item}/>
            ))}

          </Modal.Body>
        </>
      </Modal>
    </>
  )
};
export default BasketModal;