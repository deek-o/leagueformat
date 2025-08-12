import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './Navbar';
import BasicCard from './Cards';
import Leagues from '../card-images/card-leagues.jpg';
import Nations from '../card-images/nations.jpg';
import World from '../card-images/world_map.jpg';


function MyStructure() {
  return (
    <>
    <MyNavbar/>
    <body className="bg-dark text-white">
    <Container >
      <p className="text-center pt-4 pb-5">Welcome to leagueformat.com! This site is a passion project designed to inform users 
        about the various leagues from around the world and save any confusion on how the teams will be promoted, relegated or crowned champions!
        This site is created using HTML, CSS and JavaScript with the react-bootstrap framework. Hope you enjoy!</p>
      <Row className="text-center">
        <Col><BasicCard image={Leagues} /></Col>
        <Col><BasicCard image={Nations} /></Col>
        <Col><BasicCard image={World} /></Col>
      </Row>
    </Container> 
    </body>
    </>
  );
}

export default MyStructure;