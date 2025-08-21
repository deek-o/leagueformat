import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyNavbar from './Navbar';
import BasicCard from './Cards';
import Leagues from '../card-images/card-leagues.jpg';
import Nations from '../card-images/nations.jpg';
import World from '../card-images/world_map.jpg';
import countryData from "../data/continents2Nations";
import { useState } from "react";
import GoButton from "./GoButton"



function MyStructure() {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedNation, setSelectedNation] = useState("");

  const continentOptions = Object.keys(countryData).map(c => ({ value: c, label: c }));

 const nationOptions = selectedContinent
  ? Object.keys(countryData[selectedContinent].countries).map(n => ({ value: n, label: n }))
  : [];

const leagueOptions = selectedContinent && selectedNation
  ? (countryData[selectedContinent].countries[selectedNation] || []).map(l => ({ value: l, label: l }))
  : [];

  const [selectedLeague, setSelectedLeague] = useState("");


  return (
    <>
    <MyNavbar/>
    <body className="bg-dark text-white">
    <Container >
      <p className="text-center pt-4 pb-5">Welcome to LeagueFormat.com! This passion project was created to help fans understand how 
        football leagues around the world work—whether it’s promotion, relegation, or how champions are decided. The site is built 
        with HTML, CSS, and JavaScript using the React-Bootstrap framework. I hope you find it useful and enjoy exploring!</p>
        <div className="d-flex justify-content-center">
        <Row className="mx-auto text-center g-5" style={{ maxWidth: '1200px' }}>
        <Col className="pb-4"><BasicCard image={World}   title={"Select Continent"} text={"Start by selecting the continent where the league is played."} 
        options={continentOptions}
        onSelect={setSelectedContinent}
      />  
      </Col>
        <Col className="pb-4"><BasicCard image={Nations} title={"Select Nation"} text={"Now select the Nation in which the league exists"} options={nationOptions}
        onSelect={setSelectedNation}/> </Col>
        <Col className="pb-4"><BasicCard image={Leagues} title={"Select League"} text={"Lastly, choose the league to view details of its format."} options={leagueOptions} onSelect={setSelectedLeague} /></Col>
      </Row>
        </div>
      
      <GoButton class="g-3 " title="Go!" onClick={() => console.log("League selected:", selectedLeague)} disabled={!selectedLeague} > 
       
      </GoButton>
    </Container> 

    </body> 
    </>
  );
}

export default MyStructure;

// test