import { Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import './checkout-item-styles.scss';
import { useContext } from "react";
import { BasketContext } from "../../Context/basket.context";

const CheckoutItem = ({basketItem}) => {
  const { addItemToBasket, subtractItemFromBasket, removeItemFromBasket } = useContext(BasketContext);
  const { id, name, quantity, imgsrc, price} = basketItem;

  const addItemHandler = () => addItemToBasket(basketItem);
  const subtractItemHandler = () => subtractItemFromBasket(basketItem);
  const removeItemHandler = () => removeItemFromBasket(basketItem);

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
          onClick={subtractItemHandler} 
        />
        <a style={{padding: "0 10px"}}>{` ${quantity} `}</a>
        <FontAwesomeIcon 
          icon={faPlus} 
          style={{cursor: "pointer"}}
          onClick={addItemHandler} 
        />
      </Col>
      <Col className="text-center">£{price}</Col>  
      <Col className="text-center">
        <FontAwesomeIcon
          icon={faXmark}
          style={{cursor: "pointer"}} 
          onClick={removeItemHandler}
        />
      </Col>
    </Row>
  );
}

export default CheckoutItem