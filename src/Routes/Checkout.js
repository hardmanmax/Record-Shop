import { Container, Row, Col } from "react-bootstrap";

const Checkout = () => {
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
        <Row>
          <Col/>
          <Col/>
          <Col/>
          <Col/>
          <Col className="text-center">
            <h3>Total: £</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Checkout