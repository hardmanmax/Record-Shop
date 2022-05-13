import React from 'react'
import { Card, Button } from 'react-bootstrap'

const DirectoryItem = ({ category }) => {
  const { imgsrc, title, route } = category;

  return (
    <Card
      style={{paddingLeft: 0, paddingRight: 0, cursor: "pointer"}}
      className="m-1"
      md={1} 
      >
      <Card.Img style={{minHeight: "78%"}} src={imgsrc}></Card.Img>
      <Card.Footer  style={{minHeight: "22%"}}>
        <Button variant="light" >
          <Card.Title>{title}</Card.Title>
          <Card.Text>Shop Now</Card.Text>
        </Button>
        </Card.Footer>
    </Card>

  )
}

export default DirectoryItem