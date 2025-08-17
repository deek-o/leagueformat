// leagueData.js
const countryData = {
  Europe: {
    countries: {
      England: ["English Premier League", "English Championship", "English League One", " English League Two"],
      Spain: ["La Liga", "Segunda División"],
      Germany: ["Bundesliga", "2. Bundesliga", "3. Liga"],
      Scotland: ["Scottish Premiership", "Scottish Championship", "Scottish League One", "Scottish League two"],
    },
  },
  Africa: {
    countries: {
      Egypt: ["Egyptian Premier League", "Egyptian Second Division A", "Egyptian Second Division B"],
      Morocco: ["Botola", "Botola 2"],
      SouthAfrica: ["Betway Premiership", "Motsepe Foundation Championship"],
    },
  },
  Asia: {
    countries: {
      Japan: ["J1 League", "J2 League", "J3 League"],
      SouthKorea: ["K League 1", "K League 2"],
      Saudi: ["Saudio Pro League", "Saudi First Division League", "Saudi Second Division League"]
    },
  },
  Oceana: {
    countries: {
      Australia: ["A-League Men"],
      NewZealand: ["New Zealand National League"],//more to be added here]
    },
  },
  NorthAmerica: {
    countries: {
      America: ["MLS", "USL Championship"],
      Canada: ["Canadian Premier League", "League1 Canada"],
      Mexico: ["Liga MX", "Liga de Expansión MX"]
    },
  },
  SouthAmerica: {
    countries: {
      Argentina: ["Primera División", "Primera Nacional"],
      Brazil: ["Campeonato Série A", "Campeonato Série B"],
      Chile: ["Primera División", "Primera B"],
    },
  },
};

export default countryData;
