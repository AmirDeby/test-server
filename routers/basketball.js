const db = require('../sql');
const router = require('express').Router();
const { getBasketBallGame } = require("./queries")

router.get('/', async (req, res) => {
    const [rows] = await db.execute(getBasketBallGame());
    res.send(rows)
});


module.exports = router;