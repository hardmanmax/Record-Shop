import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useState } from "react";
import { BasketContext } from "../../Context/basket.context";
import BasketItem from "../BasketItem/BasketItem";
import { useNavigate } from "react-router-dom";

const BasketModal = () => {

  const { basketCount, basketItems, basketTotal } = useContext(BasketContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    handleClose();
    navigate('/checkout');
  };

  const goToShopHandler = () => {
    handleClose();
    navigate('/shop');
  }


  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Basket ({basketCount})
      </Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Basket</Modal.Title>
        </Modal.Header>

        { basketCount ? (
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

            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                <h4>Total: £{basketTotal}</h4>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="dark" onClick={goToCheckoutHandler}>
              Checkout
            </Button>
          </Modal.Footer>
        </>
        ) : (
        <>
          <Modal.Body>
            <p>Your basket is empty.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={goToShopHandler}>
              Return to shop
            </Button>
          </Modal.Footer>
        </>          
        )
      }
      </Modal>
    </>
  )
};
export default BasketModal;