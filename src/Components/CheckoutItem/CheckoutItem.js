import { Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './checkout-item-styles.scss';

const CheckoutItem = ({basketItem}) => {
  
  const { id, name, quantity, imgsrc, price} = basketItem;

  return (
    <Row key={id} className="my-3">
      <Col className="text-center">
        <Image src={imgsrc} style={{maxWidth:"80px"}}/>
      </Col>
      <Col className="text">{name}</Col>

      <Col className="text-center">
        <FontAwesomeIcon 
          icon={faMinus} 
          style={{cursor: "pointer"}} 
        />
        <a style={{padding: "0 10px"}}>{` ${quantity} `}</a>
        <FontAwesomeIcon 
          icon={faPlus} 
          style={{cursor: "pointer"}} 
        />
      </Col>
      <Col className="text-center">£{price}</Col>  
      <Col className="text-center">
        <FontAwesomeIcon
          icon={faXmark}
          style={{cursor: "pointer"}} 
        />
      </Col>
    </Row>
  );
}

export default CheckoutItem