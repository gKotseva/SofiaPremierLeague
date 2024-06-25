const router = require('express').Router()
const db = require('../db');



router.get('/players', async (req, res) => {
    try {
        const sqlQuery = `
        SELECT p.player_id, p.name, p.image, p.player_number, GROUP_CONCAT(distinct pp.position_name SEPARATOR ', ') as 'position_name', GROUP_CONCAT(distinct t.team_name SEPARATOR ', ') as 'teams' 
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

router.post('/staff', async (req, res) => {
    try {
        const {name} = req.body
        const sqlQuery = `INSERT INTO referees (name) VALUES ('${name}')`;
        await db.executeQuery(sqlQuery);
        res.json(`Successfully added ${name} to the database!`)
    } catch (error){
        console.error(error)
    }
})

router.post('/managers', async (req, res) => {
    try {
        console.log(req.body); 

        // const sqlQuery = `INSERT INTO managers (manager_name, image) VALUES ('${name}', '${'/uploads/players/' + file}')`;
        // const results = await db.executeQuery(sqlQuery);
        // res.json(`Successfully added ${name} to the database!`)
    } catch (error){
        console.error(error)
    }
})


module.exports = router