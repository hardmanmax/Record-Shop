import {Row, Image, Col} from 'react-bootstrap';
import './basket-item-styles.scss';

const BasketItem = ({basketItem}) => {
  const { name, quantity, imgsrc, price } = basketItem;
  return (
    <Row className='py-2'>
      <Col className="text-center">
        <Image 
          variant="left" 
          src={imgsrc}
          style= {{maxWidth: "80px"}}
          rounded
        />
      </Col>
      <Col className='text'>
        {name}
      </Col>
      <Col className="text-center">
        x {quantity}
      </Col>
      <Col className="text-center">
        £{price}
      </Col>
    </Row>
  )
}

export default BasketItem