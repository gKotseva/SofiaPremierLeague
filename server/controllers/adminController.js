const router = require('express').Router()
const db = require('../db');


router.get('/players', async (req, res) => {
    try {
        const sqlQuery = `
        SELECT p.player_id, p.name, p.image, p.player_number, pp.position_name, GROUP_CONCAT(distinct t.team_name SEPARATOR ', ') as 'teams' 
        FROM players p
        INNER JOIN player_positions ps ON p.player_id = ps.player_id
        INNER JOIN positions pp ON ps.position_id = pp.position_id
        INNER JOIN player_teams pt ON p.player_id = pt.player_id
        INNER JOIN teams t ON pt.team_id = t.team_id
        GROUP BY p.player_id, p.name, p.image, p.player_number, pp.position_name
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

router.get('/staff', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * from managers';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router