import { Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { BasketContext } from '../Context/basket.context';
import CheckoutItem from "../Components/CheckoutItem/CheckoutItem";
import SignInModal from "../Components/Modals/SignInModal";
import { UserContext } from "../Context/user.context";


const Checkout = () => {
  const { basketItems, basketTotal } = useContext(BasketContext);
  const { currentUser } = useContext(UserContext);  
  return (
    <>
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
    </>
  )
}

export default Checkout