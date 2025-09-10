import Table from "react-bootstrap/Table";

function basicTable({ badge, pos, club, matches, points, gd }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Badge</th>
          <th>Pos</th>
          <th>Club</th>
          <th>Played</th>
          <th>Points</th>
          <th>Goal Difference</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.club}>
            <td>
              <img src={team.badge} alt={team.club} width="30" />
            </td>
            <td>{index + 1}</td>
            <td>{team.club}</td>
            <td>{team.played}</td>
            <td>{team.points}</td>
            <td>{team.goalDifference}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default basicTable;
