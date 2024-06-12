const router = require('express').Router()
const db = require('../db');


router.get('/players', async (req, res) => {
    try {
        const sqlQuery = `
            select p.name, p.image, p.player_number, pp.position_name from players p
            inner join player_positions ps on p.player_id=ps.player_id
            inner join positions pp on ps.position_id=pp.position_id
            order by p.player_id;
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