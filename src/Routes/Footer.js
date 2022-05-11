import { Container } from 'react-bootstrap'

const style = {
  textDecoration: "none", color: "black"
};

const Footer = () => {
  return (
      <Container className='my-5 text-center' style={{position: "relative", bottom: '0px'}}>
        <a 
          style={style}          
          href="http://www.maxhardman.co.uk"
          target="_blank"
          rel="noreferrer"
        >maxhardman.co.uk</a>
      </Container>   
  )
}

export default Footer