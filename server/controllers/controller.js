const router = require('express').Router();
const db = require('../db');
const { statsPerTeamLeagueSeason } = require('../sqlQueries');

router.get('/nakazaniq', async (req, res) => {
    try {
      const sqlQuery = `SELECT * FROM penalties`;
      const results = await db.executeQuery(sqlQuery);
      res.json(results);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


router.get('/prava', async (req, res) => {
  try {
    const sqlQuery = `select * from players where rights_revoked = 1;`
    const result = await db.executeQuery(sqlQuery)
    res.json(result)
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.get('/lineups', async (req, res) => {

    const superleague = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=8;
`;
    const malusSportLeague = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=1;
`;
    const cairoLeague = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=2;
`;
    const flameLeague = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=3;
`;
    const arabeskLeague = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=22;
`;
    const spl4League = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=44;
`;
    const spl5League = `
    select * from player_stats_per_match pm
join matches m on pm.match_id = m.match_id
where season_id=8 and league_id=47;
`;


    try {
        const [superLeague, malus, cairo, flame, arabesk, spl4, spl5] = await Promise.all([
            db.executeQuery(superleague),
            db.executeQuery(malusSportLeague),
            db.executeQuery(cairoLeague),
            db.executeQuery(flameLeague),
            db.executeQuery(arabeskLeague),
            db.executeQuery(spl4League),
            db.executeQuery(spl5League),
          ]);

          res.send({superLeague, malus, cairo, flame, arabesk, spl4, spl5})
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/stats', async (req, res) => {
  const getSeasons = `select * from seasons order by season_id desc`
  try {
    const [stats, seasons] = await Promise.all([
      db.executeQuery(statsPerTeamLeagueSeason),
      db.executeQuery(getSeasons),
    ]);
    res.json({stats, seasons})
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router;
