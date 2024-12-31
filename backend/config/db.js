const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/musicBattlesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error:', err));
