import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicCard from "../components/Cards"
import Leagues from "../card-images/card-leagues.jpg";
import Nations from "../card-images/nations.jpg";
import World from "../card-images/world_map.jpg";
import countryData from "../data/continents2Nations";
import GoButton from "../components/GoButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Myhomepage() {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedNation, setSelectedNation] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");

  const navigate = useNavigate();

  const continentOptions = Object.keys(countryData).map((c) => ({
    value: c,
    label: c,
  }));

  const nationOptions = selectedContinent
    ? Object.keys(countryData[selectedContinent].countries).map((n) => ({
        value: n,
        label: n,
      }))
    : [];

  const leagueOptions =
    selectedContinent && selectedNation
      ? (countryData[selectedContinent].countries[selectedNation] || []).map(
          (l) => ({ value: l, label: l })
        )
      : [];

  const handleGo = () => {
    if (!selectedLeague) return;
    const leagueSlug = selectedLeague.toLowerCase().replace(/\s+/g, "-");
    console.log("Navigating to" + leagueSlug);
    navigate(`/league/${leagueSlug}`);
  };

  return (
    <>
      <Container>
        <p className="text-center pt-4 pb-5">
          Welcome to LeagueFormat.com!
          This passion project was created to help fans understand how football leagues around the world work 
          — whether it’s promotion and relegation, playoff systems, or how champions are crowned. 
          With this site, you can explore the structure of leagues across continents, from traditional formats to unique systems. 
          This site is built with HTML, CSS, and JavaScript, using the React-Bootstrap framework. 
          It’s a work in progress and will continue to grow as I add more leagues over time.
          Whether you’re a curious fan, a new follower of the sport, or just someone who likes to dig into how things work, I hope you find this site helpful.
          Thanks for visiting!
        </p>
        <div className="d-flex justify-content-center">
          <Row
            className="mx-auto text-center g-5"
            style={{ maxWidth: "1200px" }}>
            <Col className="pb-4">
              <BasicCard
                image={World}
                title={"Select Continent"}
                value={selectedContinent}
                text={
                  "Start by selecting the continent where the league is played."
                }
                options={continentOptions}
                onSelect={(continent) => {
                  setSelectedContinent(continent);
                  setSelectedNation("");
                  setSelectedLeague("");
                }}
              />
            </Col>
            <Col className="pb-4">
              <BasicCard
                image={Nations}
                title={"Select Nation"}
                value={selectedNation}
                text={"Now select the Nation in which the league exists"}
                options={nationOptions}
                onSelect={(nation) => {
                  setSelectedNation(nation);
                  setSelectedLeague("");
                }}
              />{" "}
            </Col>
            <Col className="pb-4">
              <BasicCard
                image={Leagues}
                title={"Select League"}
                text={
                  "Lastly, choose the league to view details of its format."
                }
                value={selectedLeague}
                options={leagueOptions}
                onSelect={setSelectedLeague}
              />
            </Col>
          </Row>
        </div>

        <GoButton
          className="g-3 "
          title="Go!"
          onClick={handleGo}
          //onClick={() => navigate(`/league/${selectedLeague.toLowerCase}`)}
          disabled={!selectedLeague}></GoButton>
      </Container>
    </>
  );
}

export default Myhomepage;

// test
