function getFootBallGame() {
    return "SELECT * FROM scoregame.games WHERE category = 'football'"
}

function getBasketBallGame() {
    return "SELECT * FROM scoregame.games WHERE category ='basketball'"
}

module.exports = { getFootBallGame, getBasketBallGame}