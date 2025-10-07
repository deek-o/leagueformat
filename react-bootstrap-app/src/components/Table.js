import Table from "react-bootstrap/Table";

function basicTable({ teams }) {
  return (
    <Table
      striped
      bordered
      hover
      size="sm"
      className="w-auto mx-auto text-center">
      <thead>
        <tr>
          <th>Badge</th>
          <th>Pos</th>
          <th>Club</th>
          <th>Played</th>
          <th>Points</th>
          <th>G/D</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.club}>
            <td>
              <img src={team.badge} width="28" />
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
