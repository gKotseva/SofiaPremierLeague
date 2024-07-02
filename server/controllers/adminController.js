const router = require('express').Router();
const db = require('../db');
const configureMulter = require('../multerConfig');

const upload = configureMulter();


router.get('/players', async (req, res) => {
    try {
        const sqlQuery = `
        SELECT p.player_id, p.name, p.image, p.player_number, 
               GROUP_CONCAT(DISTINCT pp.position_name SEPARATOR ', ') AS 'position_name', 
               GROUP_CONCAT(DISTINCT t.team_name SEPARATOR ', ') AS 'teams' 
        FROM players p
        INNER JOIN player_positions ps ON p.player_id = ps.player_id
        INNER JOIN positions pp ON ps.position_id = pp.position_id
        INNER JOIN player_teams pt ON p.player_id = pt.player_id
        INNER JOIN teams t ON pt.team_id = t.team_id
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
        const sqlQuery = 'SELECT * from teams';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/managers', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * from managers';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/staff', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * from referees';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Post Requests

router.post('/staff', async (req, res) => {
    try {
        const {name} = req.body
        const sqlQuery = `INSERT INTO referees (name) VALUES ('${name}')`;
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
      const file = req.files['file'] ? req.files['file'][0] : null;
      
      if (file) {
        const { originalname } = file;
        const imagePath = `/uploads/players/${originalname}`;
  
        const sqlQuery = `INSERT INTO managers (manager_name, image) VALUES ('${name}', '${imagePath}')`;
        await db.executeQuery(sqlQuery);
        res.json(`Successfully added ${name} to the database!`);
      } else {
        res.status(400).json({ error: 'File not uploaded' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
});

router.post('/teams', upload.fields([{ name: 'teamPhoto', maxCount: 1 }, { name: 'teamLogo', maxCount: 1 }]), async (req, res) => {
    try {
      const { teamName } = req.body;
      const teamPhoto = req.files['teamPhoto'] ? req.files['teamPhoto'][0].path : null;
      const teamLogo = req.files['teamLogo'] ? req.files['teamLogo'][0].path : null;
  
      const sqlQuery = `INSERT INTO teams (team_name, team_image, logo_image) VALUES ('${teamName}', '${teamPhoto}', '${teamLogo}')`;
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
    const file = req.files['photo'] ? req.files['photo'][0] : null;
    
    if (file) {
      const { originalname } = file;
      const imagePath = `/uploads/players/${originalname}`;

      const sqlQuery = `INSERT INTO players (name, image, player_number) VALUES ('${name}', '${imagePath}', '${number}')`;
      await db.executeQuery(sqlQuery);
      res.json(`Successfully added ${name} to the database!`);
    } else {
      res.status(400).json({ error: 'File not uploaded' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
