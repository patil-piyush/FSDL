const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const router = require('./routes/route');
const path = require('path');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', router);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});