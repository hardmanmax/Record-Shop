import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

const ProductCard = ({ product }) => {
  const { name, artist, imgsrc, price } = product;

  return (
    <Card className="m-2" style={{ width: '18rem', margin: 'auto'}}>
    <Image 
      className="p-2" 
      variant="top" 
      src={imgsrc} 
      fluid
      rounded        
      />
    <Card.Body>
      <Card.Title>
        <h4>{name}</h4>
        </Card.Title>
      <Card.Text>{artist}</Card.Text>
      <Card.Text>£{price}</Card.Text>
      <Button 
        variant="dark"
        >Add to basket</Button>
    </Card.Body>
  </Card>
  )
};

export default ProductCard