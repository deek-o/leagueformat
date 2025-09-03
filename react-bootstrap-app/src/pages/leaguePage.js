import { useParams } from "react-router-dom";
import englishPremierLeague from "../leagues/englishPremierLeague";
import scottishPremierLeague from "../leagues/scottishPremierLeague";
import spanishLaLiga from "../leagues/spanishLaLiga";

// Map slug → component
const leagueComponents = {
  "english-premier-league": englishPremierLeague,
  "scottish-premier-league": scottishPremierLeague,
  "spanish-la-liga": spanishLaLiga,
};

function LeaguePage() {
  const { leagueSlug } = useParams();
  const LeagueComponent = leagueComponents[leagueSlug];

  return LeagueComponent ? <LeagueComponent /> : <p>League not found</p>;
}

export default LeaguePage;
