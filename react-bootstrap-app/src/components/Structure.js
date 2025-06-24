import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './Navbar';

function MyStructure() {
  return (
    <>
    <MyNavbar/>
    <body className="bg-dark">
    <Container >
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container> 
    </body>
    </>
  );
}

export default MyStructure;