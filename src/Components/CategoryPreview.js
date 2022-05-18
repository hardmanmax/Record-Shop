import ProductCard from "./ProductCard/ProductCard"
import {Container, Row, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({title, products}) => {
  
  const capsTitle = title.charAt(0).toUpperCase() + title.slice(1)

  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`${title}`);
  }
  

  return (
    <Container xl={4} lg={3} md={2}>
      <h2>{title.toUpperCase()}</h2>
      <Button 
        variant="secondary"
        onClick={goToCategoryHandler}
        >
        Browse all {capsTitle}
      </Button>
      <Row className="justify-content-around">
        {
          products.filter((_, idx)=> idx < 4).map((product) => 
            <ProductCard key={product.id} product={product} />)
        }
      </Row>
    </Container>
  )
};

export default CategoryPreview
