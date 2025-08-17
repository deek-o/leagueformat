import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './navbar';
import BasicCard from './cards';
import Leagues from '../card-images/card-leagues.jpg';
import Nations from '../card-images/nations.jpg';
import World from '../card-images/world_map.jpg';


function MyStructure() {
  return (
    <>
    <MyNavbar/>
    <body className="bg-dark text-white">
    <Container>
      <p className="text-center pt-4 pb-5">Welcome to LeagueFormat.com! This passion project was created to help fans understand how 
        football leagues around the world work—whether it’s promotion, relegation, or how champions are decided. The site is built 
        with HTML, CSS, and JavaScript using the React-Bootstrap framework. I hope you find it useful and enjoy exploring!</p>
        {/* <option value="" disabled selected hidden>Select nation</option>
      <option value="1">Africa</option>
      <option value="2">Asia</option>
      <option value="3">Oceania</option>
      <option value="4">North America</option>
      <option value="5">South America</option>
      <option value="6">Europe</option> */}
      <Row className="text-center g-3">
        <Col class="pb-4"><BasicCard image={World}   title={"Select Continent"} text={"Start by selecting the continent where the league is played."} 
        options={[
        { value: "afr", label: "Africa" },
        { value: "asi", label: "Asia" },
        { value: "oce", label: "Oceania" },
        { value: "nam", label: "North America" },
        { value: "sam", label: "South America" },
        { value: "eur", label: "Europe" }]}
      />
      </Col>
        <Col class="pb-4"><BasicCard image={Nations} title={"Select Nation"} text={"Now select the Nation in which the league exists"} /></Col>
        <Col class="pb-4"><BasicCard image={Leagues} title={"Select League"} text={"Lastly, choose the league to view details of its format."} /></Col>
      </Row>
    </Container> 
    </body>
    </>
  );
}

export default MyStructure;