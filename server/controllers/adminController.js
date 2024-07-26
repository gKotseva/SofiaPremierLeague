const router = require('express').Router();
const db = require('../db');
const configureMulter = require('../multerConfig');
const { formatDateToDMY } = require('../utils');

const upload = configureMulter();

// GET Requests


router.get('/players', async (req, res) => {
  try {
    const sqlQuery = `
        SELECT p.player_id as id, p.name, p.image, p.player_number,
               GROUP_CONCAT(DISTINCT pp.position_name SEPARATOR ', ') AS 'position_name', 
               GROUP_CONCAT(DISTINCT t.team_name SEPARATOR ', ') AS 'teams',
               GROUP_CONCAT(DISTINCT s.seasons_name separator ', ') as 'seasons',
               GROUP_CONCAT(DISTINCT l.league_name separator ', ') as 'leagues'
        FROM players p
        LEFT JOIN player_positions ps ON p.player_id = ps.player_id
        LEFT JOIN positions pp ON ps.position_id = pp.position_id
        LEFT JOIN player_teams pt ON p.player_id = pt.player_id
        LEFT JOIN teams t ON pt.team_id = t.team_id
        LEFT JOIN seasons s ON pt.season_id = s.season_id
        LEFT JOIN leagues l ON pt.league_id = l.league_id
        GROUP BY p.player_id, p.name, p.image, p.player_number
        ORDER BY p.player_id;
        `;
    const results = await db.executeQuery(sqlQuery);
    res.json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/teams', async (req, res) => {
  try {
    const sqlQuery = 'SELECT team_id as id, team_name, logo_image, team_image from teams';
    const results = await db.executeQuery(sqlQuery);
    res.json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/managers', async (req, res) => {
  try {
    const sqlQuery = 'SELECT manager_id as id, manager_name, image from managers';
    const results = await db.executeQuery(sqlQuery);
    res.json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/staff', async (req, res) => {
  try {
    const sqlQuery = 'SELECT referee_id as id, name from referees';
    const results = await db.executeQuery(sqlQuery);
    res.json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/matches', async (req, res) => {
  try {
    const sqlQuery = `SELECT DATE_FORMAT(m.match_date, '%d/%m/%Y') as date, league_name as league, s.seasons_name as season, r.name as referee, th.team_name as home_team, ta.team_name as away_team, m.result, m.video_link from matches m
join leagues l on l.league_id=m.league_id
join seasons s on s.season_id=m.season_id
join referees r on r.referee_id=m.referee_id
join teams th on th.team_id=m.home_team
join teams ta on ta.team_id=m.away_team
order by match_id desc;`
    const results = await db.executeQuery(sqlQuery);
    res.json(results);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/stats', async (req, res) => {
  const playersCountQuery = 'SELECT COUNT(*) as count FROM players';
  const teamsCountQuery = 'SELECT COUNT(*) as count FROM teams';
  const leaguesCountQuery = 'SELECT COUNT(*) as count FROM leagues';
  const seasonsCountQuery = 'SELECT COUNT(*) as count FROM seasons';
  const matchesCountQuery = 'SELECT COUNT(*) as count FROM matches';

  try {
    const [playersCount, teamsCount, leaguesCount, seasonsCount, matchesCount] = await Promise.all([
      db.executeQuery(playersCountQuery),
      db.executeQuery(teamsCountQuery),
      db.executeQuery(leaguesCountQuery),
      db.executeQuery(seasonsCountQuery),
      db.executeQuery(matchesCountQuery),
    ]);

    res.send({ playersCount: playersCount[0].count, teamsCount: teamsCount[0].count, leaguesCount: leaguesCount[0].count, seasonsCount: seasonsCount[0].count, matchesCount: matchesCount[0].count })

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.get('/currentMatches', async (req, res) => {
  const sqlQuery = `
    SELECT 
        m.match_id,
        DATE_FORMAT(m.match_date, '%d-%m-%Y') AS match_date,
        m.league_id,
        m.season_id,
        m.referee_id,
        m.home_team,
        m.away_team,
        m.win_team,
        m.draw,
        m.result,
        m.video_link
    FROM matches m
    WHERE m.match_date >= DATE_SUB(CURDATE(), INTERVAL WEEKDAY(CURDATE()) + 7 DAY)
      AND m.match_date < DATE_ADD(CURDATE(), INTERVAL 7 - WEEKDAY(CURDATE()) DAY)
    ORDER BY m.match_date DESC;
  `;

  function parseDateDMY(dateStr) {
    const [day, month, year] = dateStr.split('-');
    return new Date(`${year}-${month}-${day}`);
  }

  const today = new Date();
  const formattedDate = formatDateToDMY(today);

  try {
    const results = await db.executeQuery(sqlQuery);

    const olderGames = results.filter(match => parseDateDMY(match.match_date) < today);
    const newerGames = results.filter(match => parseDateDMY(match.match_date) >= today);

    res.json({ olderGames, newerGames });
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





// POST Requests

router.post('/staff', async (req, res) => {
  try {
    const { name } = req.body
    const sqlQuery = `INSERT INTO referees (name) VALUES ('${name}')`;
    await db.executeQuery(sqlQuery);
    res.json(`Successfully added ${name} to the database!`)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/leagues', async (req, res) => {
  try {
    const { name } = req.body
    const sqlQuery = `INSERT INTO leagues (league_name) VALUES ('${name}')`;
    await db.executeQuery(sqlQuery);
    res.json(`Successfully added ${name} to the database!`)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/seasons', async (req, res) => {
  try {
    const { name } = req.body
    const sqlQuery = `INSERT INTO seasons (seasons_name) VALUES ('${name}')`;
    await db.executeQuery(sqlQuery);
    res.json(`Successfully added ${name} to the database!`)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/managers', upload.fields([{ name: 'file', maxCount: 1 }]), async (req, res) => {
  try {
    const { name } = req.body;
    let file = null

    if (req.files && req.files['file']) {
      file = '/' + req.files['file'][0].path
    }

    const sqlQuery = `INSERT INTO managers (manager_name, image) VALUES ('${name}', ${file ? `'${file}'` : 'NULL'})`;
    await db.executeQuery(sqlQuery);
    res.json(`Successfully added ${name} to the database!`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/teams', upload.fields([{ name: 'teamPhoto', maxCount: 1 }, { name: 'teamLogo', maxCount: 1 }]), async (req, res) => {
  try {
    const { teamName } = req.body

    let teamPhoto = null
    let teamLogo = null

    if (req.files && req.files['teamPhoto']) {
      teamPhoto = '/' + req.files['teamPhoto'][0].path
    }

    if (req.files && req.files['teamLogo']) {
      teamLogo = '/' + req.files['teamLogo'][0].path
    }
    const sqlQuery = `INSERT INTO teams (team_name, team_image, logo_image) VALUES ('${teamName}', ${teamPhoto ? `'${teamPhoto}'` : 'NULL'}, ${teamLogo ? `'${teamLogo}'` : 'NULL'})`;
    await db.executeQuery(sqlQuery);
    res.json(`Successfully added ${teamName} to the database!`);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/players', upload.fields([{ name: 'photo', maxCount: 1 }]), async (req, res) => {
  try {
    const { name, number } = req.body;

    if (req.files && req.files['photo']) {
      const file = req.files['photo'][0];
      const { originalname } = file;
      const imagePath = `/uploads/players/${originalname}`;
      const sqlQuery = `INSERT INTO players (name, image, player_number) VALUES ('${name}', '${imagePath}', '${number}')`;
      await db.executeQuery(sqlQuery);
      res.json(`Successfully added ${name} to the database!`);
    } else {
      const sqlQuery = `INSERT INTO players (name, image, player_number) VALUES ('${name}', NULL, '${number}')`;
      await db.executeQuery(sqlQuery);
      res.json(`Successfully added ${name} to the database!`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/awards', upload.fields([{ name: 'awardFile', maxCount: 1 }]), async (req, res) => {
  const currentAward = req.body.formName.toLowerCase()
  const filePath = '/' + req.files['awardFile'][0].path
  const name = req.body.name
  const teamName = req.body.teamName

  try {
    if (currentAward === 'arabesk' || currentAward === "cairo") {
      const sqlQuery = `INSERT INTO awards_${currentAward} (team_id, image) SELECT team_id, '${filePath}' FROM teams WHERE team_name = '${name}'`
      await db.executeQuery(sqlQuery);
    } else {
      const sqlQuery = `INSERT INTO awards_${currentAward} (player_id, image) SELECT distinct p.player_id, '${filePath}' FROM players p join player_teams pt on p.player_id=pt.player_id join teams t on pt.team_id=t.team_id WHERE name = '${name}' and team_name = '${teamName}'`
      await db.executeQuery(sqlQuery);
    }

  } catch (error) {
    console.error(error)
  }

})

module.exports = router;
