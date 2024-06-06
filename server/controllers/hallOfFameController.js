
const router = require('express').Router()
const db = require('../db');

router.get('/5years', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, p.`name` FROM hallOfFame_5years a INNER JOIN players p ON p.player_id = a.player_id order by a.id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/200goals', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, p.`name` FROM hallOfFame_200goals a INNER JOIN players p ON p.player_id = a.player_id order by a.id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/champions', async (req, res) => {
    try {
        const sqlQuery = 'SELECT l.league_name, s.seasons_name, t.team_name, t.logo_image FROM hallOfFame_champions h INNER JOIN teams t ON t.team_id = h.team_id INNER JOIN leagues l on l.league_id = h.league_id INNER JOIN seasons s on s.season_id=h.season_id';
        const results = await db.executeQuery(sqlQuery)
        res.json(results)
    }
    catch (error) {
        console.error('Error executing query:', error)
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router