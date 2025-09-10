import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicTable from "../components/Table";
import { englishTeamData } from "../data/englishTeamStats";

const teams = [englishTeamData];
// const teams = [
//   {
//     badge: "/arsenal.png",
//     club: "Arsenal",
//     played: 38,
//     points: 87,
//     goalDifference: 55,
//   },
//   {
//     badge: "/man-city.png",
//     club: "Man City",
//     played: 38,
//     points: 89,
//     goalDifference: 61,
//   },
//   {
//     badge: "/chelsea.png",
//     club: "Chelsea",
//     played: 38,
//     points: 74,
//     goalDifference: 40,
//   },
// ];

function EnglishPremierLeague() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="justify-content-center mt-5">
            <BasicTable teams={englishTeamData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default EnglishPremierLeague;
