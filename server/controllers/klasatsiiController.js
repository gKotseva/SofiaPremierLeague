
const router = require('express').Router()
const db = require('../db');

router.get('/cairo-fareplay', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM awards_cairo ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/vr7-igrach-sedmitsa', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM awards_vr7 ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/gripsocks-igrach-sedmitsa', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM awards_gripsocks ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/kerelski-igrach-sedmitsa', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM awards_kerelski ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/igrata-arabesk', async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM awards_arabesk ORDER BY id desc';
        const results = await db.executeQuery(sqlQuery);
        res.json(results);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router