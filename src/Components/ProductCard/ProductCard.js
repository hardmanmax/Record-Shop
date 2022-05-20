import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import { useContext } from 'react';
import { BasketContext } from '../../Context/basket.context';
import './product-card-styles.scss';

const ProductCard = ({ product }) => {
  
  const { addItemToBasket } = useContext(BasketContext);
  //Allows us to add specific item to basket, meaning we can display 
  //  the exact item in the basket with its props.
  const addProductToBasket = () => addItemToBasket(product);

  const { name, artist, imgsrc, price } = product;

  return (
    <Card 
      className="m-2 shadow text-center" 
      style={{ 
        width: '18rem', 
        margin: 'auto',
        }}>
    <Image 
      className="p-2" 
      variant="top" 
      src={imgsrc} 
      fluid
      rounded        
      />
    <Card.Body>
      <Card.Title>
        <h4 className='title'>{name}</h4>
        </Card.Title>
      <Card.Text>{artist}</Card.Text>
      <Card.Text>£{price}</Card.Text>
      <Button 
        variant="dark"
        onClick={addProductToBasket}
        >Add to basket</Button>
    </Card.Body>
  </Card>
  )
};

export default ProductCard