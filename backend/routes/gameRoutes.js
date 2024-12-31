const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Start the game
router.post('/start', gameController.startGame);

// Submit an answer
router.post('/submit', gameController.submitAnswer);

// Fetch the leaderboard
router.get('/leaderboard', gameController.getLeaderboard);

module.exports = router;
