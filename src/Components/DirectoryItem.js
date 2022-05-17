import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imgsrc, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <Card
      onClick={onNavigateHandler}
      style={{paddingLeft: 0, paddingRight: 0, cursor: "pointer"}}
      className="m-1"
      md={1} 
      >
      <Card.Img style={{minHeight: "78%"}} src={imgsrc}></Card.Img>
      <Card.Footer style={{minHeight: "22%", textAlign: "center"}}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Shop Now</Card.Text>
        </Card.Footer>
    </Card>

  )
}

export default DirectoryItem