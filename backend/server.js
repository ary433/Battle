const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// Connect to the database
mongoose.connect('mongodb://localhost:27017/musicBattlesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error:', err));

// Use routes
app.use('/api/games', gameRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
