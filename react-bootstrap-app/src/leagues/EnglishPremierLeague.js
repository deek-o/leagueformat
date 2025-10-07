import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicTable from "../components/Table";
import { englishPremTeamData } from "../data/englishPremTeamStats";

const teams = englishPremTeamData;

function EnglishPremierLeague() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="mt-5">
            <BasicTable teams={englishPremTeamData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default EnglishPremierLeague;
