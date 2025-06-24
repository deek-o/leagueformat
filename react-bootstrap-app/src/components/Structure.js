import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './components/Navbar';

function Structure() {
  return (
    <>
    <MyNavbar/>
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container> </>
    
  );
}

export default ContainerExample;