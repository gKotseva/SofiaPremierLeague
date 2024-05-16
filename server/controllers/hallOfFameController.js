
const router = require('express').Router()
const db = require('../db');

router.get('/5years', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM hallOfFame_5years ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/200goals', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM hallOfFame_200goals ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router