const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017'; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);

// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));


// Routes
app.use('/auth', authRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
