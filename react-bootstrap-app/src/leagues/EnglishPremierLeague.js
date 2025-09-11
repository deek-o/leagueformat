import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicTable from "../components/Table";
import { englishTeamData } from "../data/englishTeamStats";

const teams = [englishTeamData];

function EnglishPremierLeague() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="mt-5 w-auto">
            <BasicTable teams={englishTeamData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default EnglishPremierLeague;
