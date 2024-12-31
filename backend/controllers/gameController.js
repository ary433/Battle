const User = require('../models/userModel');

// Start a new game
exports.startGame = async (req, res) => {
    const { username, walletAddress } = req.body;
    try {
        // Check if user already exists
        let user = await User.findOne({ walletAddress });
        if (!user) {
            // If not, create new user
            user = new User({ username, walletAddress, score: 0 });
            await user.save();
        }

        // Return user data to start the game
        res.json({ message: 'Game started', user });
    } catch (err) {
        res.status(500).json({ error: 'Error starting game' });
    }
};

// Submit an answer and calculate score
exports.submitAnswer = async (req, res) => {
    const { walletAddress, answer } = req.body;

    try {
        // Find the user by wallet address
        const user = await User.findOne({ walletAddress });

        if (user) {
            // Check answer and calculate score
            let scoreIncrease = 0;
            if (answer === 'correct') {
                scoreIncrease = 10;
            }

            // Update user score
            user.score += scoreIncrease;
            await user.save();

            res.json({ message: 'Answer submitted', score: user.score });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error submitting answer' });
    }
};

// Fetch the leaderboard (top players)
exports.getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({ score: -1 }).limit(10); // Get top 10 players
        res.json({ users });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching leaderboard' });
    }
};
