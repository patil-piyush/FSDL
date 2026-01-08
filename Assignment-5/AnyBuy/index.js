const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // For static files if needed

// Session Configuration (Authentication State)
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using https
}));

// Routes
// We mount auth routes at /auth (e.g., /auth/login)
app.use("/auth", authRoutes);
// We mount user routes at root (e.g., /home, /cart)
app.use("/", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});