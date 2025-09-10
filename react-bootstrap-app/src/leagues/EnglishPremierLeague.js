import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicTable from "../components/Table";
function EnglishPremierLeague() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="justify-content-center mt-5">
            <BasicTable />
          </div>
        </Col>
      </Row>
    </Container>
    // <div>
    //   <h1>English Premier League</h1>
    //   <p>Details about the EPL go here…</p>

    // </div>
  );
}

export default EnglishPremierLeague;
