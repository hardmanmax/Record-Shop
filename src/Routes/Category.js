import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import ProductCard from '../Components/ProductCard';
import { CategoriesContext } from '../Context/categories.context';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  const navigate =useNavigate();

  const goToShopHandler = () => {
    navigate('/shop');
  }
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <Container>
      <h2>{category.toUpperCase()}</h2>
      <span style={{cursor: "pointer"}} onClick={goToShopHandler}>&#60; Return to shop</span>
      <Row className="justify-content-around">
        {
          products && products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
      </Row>
    </Container>
  )
};

export default Category;