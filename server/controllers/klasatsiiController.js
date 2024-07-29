
const router = require('express').Router()
const db = require('../db');

router.get('/cairo-fareplay', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, t.team_name FROM awards_cairo a INNER JOIN teams t ON t.team_id = a.team_id';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/vr7-igrach-sedmitsa', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, p.`name` FROM awards_vr7services a INNER JOIN players p ON p.player_id = a.player_id';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/gripsocks-igrach-sedmitsa', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, p.`name` FROM awards_gripsocks a INNER JOIN players p ON p.player_id = a.player_id';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/kerelski-igrach-sedmitsa', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, p.`name` FROM awards_kerelski a INNER JOIN players p ON p.player_id = a.player_id';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/igrata-arabesk', async (req, res) => {
    try {
        const sqlQuery = 'SELECT a.image, t.team_name FROM awards_arabesk a INNER JOIN teams t ON t.team_id = a.team_id';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router