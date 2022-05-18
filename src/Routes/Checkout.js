import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { BasketContext } from '../Context/basket.context';
import CheckoutItem from "../Components/CheckoutItem/CheckoutItem";
import SignInModal from "../Components/Modals/SignInModal";
import { UserContext } from "../Context/user.context";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { basketItems, basketTotal } = useContext(BasketContext);
  const { currentUser } = useContext(UserContext);  

  const navigate = useNavigate();

  const goToShopHandler = () => {
    navigate('/shop');
  }

  return (
    <>
      {
        basketItems.length ? (
          <Container>
            <Row className="my-2">
              <h2>Basket</h2>
            </Row>
            <Row>
              <Col className="text-center">Album</Col>
              <Col className="text-left">Title</Col>
              <Col className="text-center">Quantity</Col>
              <Col className="text-center">Price</Col>
              <Col className="text-center">Remove</Col>
            </Row>

            {
              basketItems.map((basketItem) => (
                <CheckoutItem key={basketItem.id} basketItem={basketItem}/>
              ))
            }
            <Row>
              <Col/>
              <Col/>
              <Col/>
              <Col/>
              <Col className="text-center">
                <h3>Total: £{basketTotal}</h3>
                <>
                  <Button className="text-center"  variant="dark">
                    {
                      currentUser ? (
                        <span>Proceed to payment</span>
                      ) : (
                      <>
                          <SignInModal/>
                      </>
                        )
                    }
                  </Button>
                </>
              </Col>
            </Row>
          </Container>
        ) : (
          <Container className="align-items-center">
            <Col >
              <h2>Your basket is empty</h2>
              <Button variant="dark" onClick={goToShopHandler}>Return to shop</Button>
            </Col>
          </Container>
        )
      }
    </>
  )
}

export default Checkout