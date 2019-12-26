const db = require('../sql');
const router = require('express').Router();
const { getFootBallGame } = require("./queries")

router.get('/', async(req, res) => {
    const [rows] = await db.execute(getFootBallGame());

    
    res.send(rows)
});


module.exports = router;