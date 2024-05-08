
const router = require('express').Router()
const db = require('../db');

router.get('/cairo-fareplay', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM awards_arabesk';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router