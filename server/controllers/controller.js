const router = require('express').Router();
const db = require('../db');

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

module.exports = router;